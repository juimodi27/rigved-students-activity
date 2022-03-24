let fs = require('fs');
let http = require("http");
let url = require("url");
let PORT_NO = 3000;
http
.createServer((request, response) => {
    let urlString = request.url;
    console.log(urlString);
    if(urlString != '/favicon.ico') {
        let urlObject = url.parse(urlString, true);
        let user = urlObject.query;
        console.log(user); 
        let data = fs.readFileSync('entries.json');
        let dataString = data.toString();
        let jsArray = undefined;
        if(dataString.length < 1 || dataString == '') {
            jsArray = [];
        } else{
            jsArray=JSON.parse(dataString);
        }
        jsArray.push(user);
        console.log(JSON.stringify(jsArray));
        fs.writeFileSync('entries.json', JSON.stringify(jsArray));
        response.writeHead(200, {'content-type': 'text/html'});
        response.write(`<h2>Hello ${user.name}, your age is ${user.age}</h2>`)
    }
    response.end();
})
.listen(PORT_NO, () => console.log(`Server running at ${3000}`));