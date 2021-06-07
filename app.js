//console.log("PROCESS: ", process); //  entire appliccation running in the process.
// const helpers = require("./helpers")
// // var let const
// const total = helpers.sum(10, 200);
// console.log("TOTAL: ",total);

// Object destructing

// const { sum } = require("./helpers"); // { sum } its an object, and here we can import many object

// const total = sum(10, 200);
// console.log("TOTAL: ",total);


// using nodejs core modules ::
 // { sum } its an object, and here we can import many object


// const http = require("http");

// const server = http.createServer((req, res) => {
//     res.end("hello world from node js real updated");
// });

// server.listen(3000);

// const total = sum(10, 200);
// console.log("TOTAL: ",total);




// EXPRESS using ::
// const express = require('express')
// const app = express()
 
// app.get('/', (req, res) => {
//   res.send("hi what's up , I am express")
// })
 
// app.listen(3000)

// programming for event loop
// fs means file system
// const fs = require("fs");
// const fileName = "target.text";

// // watch method has 2 argument 1. fileName 2. call back or arrow function
// fs.watch(fileName, () => {
//     console.log("File Changed");
// });    


//Asynchronous Programming
// NOTE ::
//  1. node js single threated non blocking input/output module.
//  2. even though it is single threated- it is efficient.
//  3. because it uses non-locking event loop.
//  4. they will be executed one by one without waiting for any one of these to complete.
//  5. instead they will be executed and completed as the process is running other callbacks.

// const fs = require("fs");
// const fileName = "target.text";

// fs.readFile(fileName, (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log("Node js async programming ... ?");




// Synchronous Programming
// blocking input/output module

// const fs = require("fs");
// const fileName = "target.text";

// const data = fs.readFileSync(fileName);
// console.log(data.toString());

// console.log("Node js async programming ... ?");



// Functional approach

const fs = require("fs");
const fileName = "target.text";

// 2 method
const errHandler = err => console.log(err);
const dataHandler = data => console.log(data.toString());

// 2 method functional approach
fs.readFile(fileName, (err, data) => {
    if (err) errHandler(err)
    dataHandler(data);
});

console.log("Node js async programming ... ?");