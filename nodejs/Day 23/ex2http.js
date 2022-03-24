let http = require("http");
let PORT_NO = 3001;
http.createServer(function(request, response) { 
    console.log(`Request arrives`);
    response.write(`This is our second app`);
    response.end();
}).listen(PORT_NO, function(){
    console.log(`Server is running in ${PORT_NO}`)
});