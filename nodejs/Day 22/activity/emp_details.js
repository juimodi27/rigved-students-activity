let fs = require("fs");
let read = require("readline-sync");
let id = read.question("Enter you id: ");
let name = read.question("Enter you name: ");
let salary = read.question("Enter your salary: ");
let emp = {id,name,salary};
console.log(`Hello ${name}, your id is ${id} and salary is ${salary}`);

let message = JSON.stringify(emp);
fs.writeFileSync("details.json",message.concat("\n"), {flag:'a+'})
console.log("Done...");