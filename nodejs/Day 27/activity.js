let express = require("express");
let app = express();

let http = require("http").createServer(app);

let socketio = require("socket.io");
let io = socketio(http);

app.get("/", (request, response) => {
    
    response.sendFile(__dirname+'/activity.html'); 
});

io.on('connection', (socket) => {
    console.log(`client connected : ${socket.id}`);
    socket.on("msg", (data) => {
        console.log(data);
        io.broadcast.emit(`meassage received ${data}`);
    });
});

http.listen(3000, () => console.log('server is running in 3000'))