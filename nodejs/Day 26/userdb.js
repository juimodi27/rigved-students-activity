//importing all the necessary librabries
let express = require("express");
let cors = require("cors");
let mongoClient = require("mongodb").MongoClient;
let parser = require("body-parser");

// referencing top level express function 
let app = express();
// database url
let dbURL = "mongodb://localhost:27017";
// express server port
let PORT = 3001;

// start the express server
app.listen(PORT, () => console.log(`Server running in ${PORT}`));

// middleware to parse request & enable cors
app.use(parser.json());
app.use(cors());
// on GET: /users you must able to returns all the entries object 
app.get("/users", (request, response) => {
    // connect(url, parser, callback)
    mongoClient.connect(dbURL, {useNewUrlParser:true}, (error, client) => {
        if(error) 
            throw error;
        let db = client.db("mydb");
        let cursor = db.collection("entries").find();
        let users = [];
        //cursor.forEach(callback1, callback2)
        cursor.forEach((doc, err) => {
            if(err)
                throw err;
            users.push(doc);
        }, () => {
            response.json(users);
            client.close();
        });
    });
});
// on POST: /users you must able to store the entries object
app.post("/users", (request, response) => {
    let userDocument = request.body;
    // connect(url, parser, callback)
    // parser parses the url to establish connection
    mongoClient.connect(dbURL, {useNewUrlParser:true}, (error, client) => {
        if(error)
            throw error;
        // connect to the mydb instance
        let db = client.db("mydb");
        // use the collection 'entries' to insert the document
        db.collection("entries").insertOne(userDocument, (err, res) => {
            if(err) {
                // 409 status code is for conflict
                response.status(409).json({"message": `User with an id ${userDocument._id} exists`});
            }
            // 201 status code is used when resource is created
            response.status(201).json(res);
            client.close();
        });
    });
});
//on GET: /users/:id to get a single document based on id
app.get("/users/:id", (request, response) => {
    // reading the path parameter, converting id in int format
    let id = parseInt(request.params.id);
    // connect(url, parser, callback)
    mongoClient.connect(dbURL, {useNewUrlParser:true}, (error, client) => {
        if(error)
            throw error;
        // use the mydb instance
        let db = client.db("mydb");
        // use the collection 'entries'
        db.collection("entries").findOne({_id:id})
        .then((doc) => {
            if(doc != null) {
                response.json(doc);
            } else {
                response.status(404).json({"message":`Sorry ${id} doesn't exist`})
            }
            client.close();
        });
    });
});
//on DELETE: /users/:id to delete the document based on id
app.delete("/users/:id", (request, response) => {
    let id = parseInt(request.params.id);
    mongoClient.connect(dbURL, {useNewUrlParser:true}, (error, client) => {
        if(error) throw error;
        let db = client.db("mydb");
        // use the collection 'entries' and deleteOne() to delete based on id
        db.collection("entries").deleteOne({_id:id})
        .then((doc) => {
            response.json(doc);
            client.close();
        })
    });
});
// on PUT: /users/:id/:age to update age from id
app.put("/users/:id/:age", (request, response) => {
    let id = parseInt(request.params.id);
    let ageNew = parseInt(request.params.age);
    mongoClient.connect(dbURL, {useNewUrlParser:true}, (error, client) => {
        if(error) throw error;
        let db = client.db("mydb");
        // use the collection 'entries' and updateOne() to update the age on id
        db.collection("entries").updateOne({_id:id}, {$set:{age: ageNew}})
        .then((doc) => {
            response.json(doc);
            client.close();
        })
    });
});