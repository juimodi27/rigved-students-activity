let http = require("http");
let url = require("url"); // this converts url query parameter to javascript object
let PORT_NO = 3001;
http
.createServer((request, response) => {
    let urlString = request.url;
    if(urlString != '/favicon.ico') {
        // extract the query parameter & convert it into javascript object
        let urlObject = url.parse(urlString, true); // true is a flag to enable conversion
        let user = urlObject.query;
        console.log(user); 
        console.log(JSON.stringify(user));
        response.writeHead(200, {'content-type': 'text/html'});
        response.write(`<h2>Hello ${user.name}, your age is ${user.age}</h2>`)
    }
    response.end();
})
.listen(PORT_NO, () => console.log(`Server running at ${3001}`));