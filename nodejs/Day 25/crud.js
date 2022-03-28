let express = require('express');
let fs = require('fs');
let app = express();
let PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
});
app.post('/user/:userId/:userName/:userAge', (request, response) => {
    let data = fs.readFileSync('crud.json');
    let string = data.toString();
    let jsArray = undefined;
    if (string.length < 1 || string == "") {
        jsArray = [];
    } else {
        jsArray = JSON.parse(string);
    }
    let id = request.params.userId;
    let name = request.params.userName;
    let age = request.params.userAge;
    let user = { userId: id, userName: name, userAge: age };
    jsArray.push(user);
    let users = JSON.stringify(jsArray);
    fs.writeFileSync('crud.json', users);
    response.json(jsArray);
});
app.get('/user', (request, response) => {
    let data = fs.readFileSync('crud.json');
    let dataString = data.toString();
    let users = JSON.parse(dataString);
    response.json(users);
});
app.get('/user/:userId', (request, response) => {
    let id = request.params.userId;
    let data = fs.readFileSync('crud.json');
    let datastring = data.toString();
    let users = JSON.parse(datastring);
    for (let i = 0; i < users.length; i++) {
        if (users[i].userId == id) {
            let user = { userId: users[i].userId, name: users[i].userName, age: users[i].userAge };
            response.json(user);
        }
    }
});
app.delete('/user/:userId', (request, response) => {
    let id = request.params.userId;
    let data = fs.readFileSync('crud.json');
    let datastring = data.toString();
    let users = JSON.parse(datastring);
    for (let i = 0; i < users.length; i++) {
        if (users[i].userId == id) {
            users.splice(i, 1);
            let userData = JSON.stringify(users);
            fs.writeFileSync('crud.json', userData);
            response.json(users);
        }
    }
});