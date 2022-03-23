let fs = require("fs");
let message = "Hello everyone this is my first message\n";
fs.writeFileSync("message.txt", message, {flag: 'a+'});
// writeFileSync - 3rd arguement appends the data
console.log("Done...");