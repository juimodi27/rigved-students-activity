let express = require("express");
let app = express();
let parser = require("body-parser");
let PORT = 3000;

app.listen(PORT, () => console.log(`Server running in ${PORT}`));

app.use(parser.json());         // parses json coming in the request

app.post('/user', (request, response) => {
    //extract the json from the request body using request.body
    let content = request.body;         // {"name":Value, "age":value}
    console.log(content);
    response.send(`Hello, ${content.name}, your age is: ${content.age}`);
});
app.post('/user/:id', (request, response) => {
    //extract the json from the request body using request.body
    let content = request.body;         // {"name":Value, "age":Value}
    let id = request.params.id;
    console.log(id, content);
    let user = {userId: id, username: content.name, age: content.age};
    response.json(user);
});