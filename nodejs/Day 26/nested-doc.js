let express = require("express");
let cors = require("cors");
let mongoClient = require("mongodb").MongoClient;
let parser = require("body-parser");

let app = express();
let dbURL = "mongodb://localhost:27017";
let PORT = 3001;

app.listen(PORT, () => console.log(`Server running in ${PORT}`));

app.use(parser.json());
app.use(cors());

app.get("/users", (request, response) => {
    mongoClient.connect(dbURL, {useNewUrlParser:true}, (error, client) => {
        if(error) 
            throw error;
        let db = client.db("mydb");
        let cursor = db.collection("entries").find();
        let users = [];
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

app.post("/users", (request, response) => {
    let userDocument = request.body;
    mongoClient.connect(dbURL, {useNewUrlParser:true}, (error, client) => {
        if(error)
            throw error;
        let db = client.db("mydb");
        db.collection("entries").insertOne(userDocument, (err, res) => {
            if(err) {
                response.status(409).json({"message": `User with an id ${userDocument._id} exists`});
            }
            response.status(201).json(res);
            client.close();
        });
    });
});

app.get("/users/:id", (request, response) => {
    let id = parseInt(request.params.id);
    mongoClient.connect(dbURL, {useNewUrlParser:true}, (error, client) => {
        if(error)
            throw error;
        let db = client.db("mydb");
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

app.delete("/users/:id", (request, response) => {
    let id = parseInt(request.params.id);
    mongoClient.connect(dbURL, {useNewUrlParser:true}, (error, client) => {
        if(error)
            throw error;
        let db = client.db("mydb");
        db.collection("entries").deleteOne({_id:id})
        .then((doc) => {
            response.json(doc);
            client.close();
        })
    });
});

app.put("/users/:id/:city", (request, response) => {
    let id = parseInt(request.params.id);
    let city = parseInt(request.params.city);
    mongoClient.connect(dbURL, {useNewUrlParser:true}, (error, client) => {
        if(error)
            throw error;
        let db = client.db("mydb");
        db.collection("entries").updateOne({_id:id}, {$set:{"address.city":city}})
        .then((doc) => {
            response.json(doc);
            client.close();
        })
    });
});