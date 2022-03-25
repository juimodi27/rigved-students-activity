// importing express module
let express = require("express");
// This refers to top level function from which you can access get, post, put delete, listen
let app = express(); 

// start the server
let PORT = 3002

app.listen(PORT, () => {console.log(`Express is running at ${PORT}`)});
//create webservices by configuring URL and using http methods
app.get('/', (request, response) => {
    response.send('Requesting GET');          // returns text data to the consumer
});
//implementing POST
app.post('/', (request, response) => {
    response.send('Requesting POST');         // returns text data to the consumer
});
//implementing PUT
app.put('/', (request, response) => {
    response.send('Requesting PUT');         // returns text data to the consumer
});
//implementing DELETE
app.delete('/', (request, response) => {
    response.send('Requesting DELETE');      // returns text data to the consumer
});