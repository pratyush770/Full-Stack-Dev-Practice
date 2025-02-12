var myfs = require('fs')  // fs module
myfs.writeFile('sample.txt', "Hello World", function(err) {
        console.log("Saved")
})
// read file in async mode
myfs.readFile('sample.txt', function(err, data) {
    console.log("Async reading..." + data.toString())
})
// read file in sync mode
var data1 = myfs.readFileSync('sample.txt')
console.log('Sync reading...' + data1.toString())
// end
console.log("Reading is complete")
// extra code
var i = 1
while(i<=5) {
    console.log("Number: " + i)
    i++
}