var myos = require('os')
console.log("Architecure: " + myos.arch())  // display os architecture
console.log("Total memory: " + myos.totalmem())  // display total memory
console.log("Free memory: " + myos.freemem())  // display free memory
console.log("Temp directory: " + myos.tmpdir())  // display temp directory
console.log("Platform: " + myos.platform())  // display platform
console.log("Release: " + myos.release())  // display release
console.log("Endianess: " + myos.endianness())  // display endianess
console.log("Type: " + myos.type())  // display type
console.log("Host name: " + myos.hostname())  // display host name