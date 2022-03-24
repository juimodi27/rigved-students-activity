let http = require("http");
let PORT_NO = 3001;
http.createServer(callback1).listen(PORT_NO, callback2);

// this is executed by passing to the createServer, when the request arrives
function callback1(request, response) {
    console.log('callback1 is executed, request arrives')
    response.write('Welcome to our first web app');
    response.end();         // to end the response writing
}
// this is executed when the server occupies the port
function callback2() {
    console.log(`callback2 is executed, server started at ${PORT_NO}`)
}

// You need to send request from the browser, url will be http://localhost:3001