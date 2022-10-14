// Node.js program to illustrate
// util.promisify() methods

// Since promisify function
// returns promise version
// of a function, it can also
// operate using async and await

// Importing Utilities module
const util = require('util')

// Importing File System module
const fs = require('fs')

// Use promisify to convert callback
// based method fs.readdir to
// promise based method
const readdir = util.promisify(fs.readdir)

 function myfunc(param1){
  return "testing 123..."
 }
