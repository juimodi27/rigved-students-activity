let express = require("express");
let app = express();
let parser = require("body-parser");
let PORT = 3000;

app.listen(PORT, () => console.log(`Server running in ${PORT}`));

app.post("/user/:id", (request, response) => {
    let queryData = request.query; // 
    let id = request.params.id; // 
    let age = queryData.age;
    response.send(`${id} is the path parameter and ${age} is query parameter`);
});

app.post("/", (request, response) => {
    response.send('hello world');
});