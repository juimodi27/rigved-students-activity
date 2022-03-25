let httpModule = require("http");
let urlModule = require("url");

let PORT_NO = 3001;

httpModule.createServer((request, response) => { 
    if(request.url != '/favicon.ico') {
        console.log(`URL is ${request.url}`);
        let urlObject = urlModule.parse(request.url, true);
        let queryParameters = urlObject.query;      // it reads the query parameters
        response.writeHead(200, {'content-type':'text/html'})
        response.write(`<h2>Name: ${queryParameters.name}</h2>`);
        response.end();
    }
}).listen(PORT_NO, () => {
    console.log(`Server is running in ${PORT_NO}`);
});