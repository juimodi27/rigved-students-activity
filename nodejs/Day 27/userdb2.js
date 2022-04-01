let mongoose = require("mongoose");
// database url must also have the database name
let dbURL = "mongodb://localhost:27017/mydb";
// connecting to the mongodb
mongoose.connect(dbURL);
// get the reference of the database instance
let db = mongoose.connection;

db.once('open', () => {
    let doc = {_id:121, name:"Jui", age:22}
    // create the schema for user document
    let userSchema = mongoose.Schema({_id:Number, name:String, age:Number});
    // define the model that specifies schema for the collection 'user'
    let UserModel = mongoose.model('User', userSchema, 'user');
    // create an object of UserModel and pass the document to store
    let user = new UserModel(doc);
    user.save((err, res)  => {
        if(err) throw err;
        console.log(`Stored ${res.name}`)
    });
});