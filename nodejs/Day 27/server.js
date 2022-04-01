let express = require("express");
let app = express();

let http = require("http").Server(app);

let socketio = require("socket.io");
let io = socketio(http);

app.get("/", (request, response) => {
    
    response.sendFile(__dirname+'/index.html'); 
})

io.on('connection', (socket) => {
    socket.on("msg", (data) => {
        console.log(`Client sent ${data}`)
    });
    
    socket.emit('obj', 'Hello I am server');
});

http.listen(3000, () => console.log('server is running in 3000'))