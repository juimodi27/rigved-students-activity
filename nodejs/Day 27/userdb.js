let mongoose = require("mongoose");
// database url must also have the database name
let dbURL = "mongodb://localhost:27017/mydb";
// connecting to the mongodb
mongoose.connect(dbURL);
// get the reference of the database instance
let db = mongoose.connection;
// check for connection status
db.once('open', () => {
    console.log('connected to mongodb')
});