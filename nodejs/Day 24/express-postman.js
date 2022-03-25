let fs = require('fs');
let express = require('express');
let app = express();
app.listen(3003, () => console.log('Server is running at 3003'));
app.get('/json', (request,response) => {
    let data = fs.readFileSync('entries.json');
    let dataString = data.toString();
    let jsdata = JSON.parse(dataString);
    response.json(jsdata);
});