var myfs = require('fs')  // fs module for file operations
myfs.writeFile('newFile.txt', "Hello World", function(err) {  // creates a file and writes data
    console.log("Saved")
})
myfs.appendFile('newFile.txt', " Text appended", function(err) {  // appends data to the existing file or appends it
    console.log("Appended")
})
myfs.rename('newFile.txt', 'renamedFile.txt', function(err) {  // renames the file
    console.log("File renamed")
})
myfs.unlink('renamedFile.txt', function(err) {  // deletes the file
    console.log('File deleted')
})