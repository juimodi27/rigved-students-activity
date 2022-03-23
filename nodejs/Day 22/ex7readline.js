let read = require("readline-sync");
//question() is the function that waits for user to enter input
let name = read.question("Enter you name: ");
let age = read.question("Enter your age: ");
console.log(`Hello ${name}, your age is ${age}`);

//questionInt() returns int value
let num1 = read.questionInt("Enter a number: ");
let num2 = read.questionInt("Enter another number: ");
let result = num1 + num2;
console.log(`Result = ${result}`);