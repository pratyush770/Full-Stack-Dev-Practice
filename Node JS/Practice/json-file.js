// read json file
const fs = require('fs')
fs.readFile("student.json", "utf8", (err, data) => {
    if(err){
        console.log(err)
        return;
    }
    const jsonData = JSON.parse(data)
    console.log("JSON content: ", jsonData)
})