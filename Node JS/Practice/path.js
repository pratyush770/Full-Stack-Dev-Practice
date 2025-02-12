var mypath = require('path')  // path module
console.log(mypath.basename(__filename))  // access current file
console.log(mypath.dirname(__filename))  // get current directory
console.log(mypath.delimiter)  // get the delimiter
console.log(mypath.parse(__filename))  