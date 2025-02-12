// go to cmd, 
// npm install lodash
// npm install colors
// npm list
var http=require('http')
var ld=require('lodash')
http.createServer(function(req,res){
    res.write(ld.toUpper('Hello students...welcome\n'))
    res.end()
}).listen(5051)
// after running, go to the browser and search localhost:5051