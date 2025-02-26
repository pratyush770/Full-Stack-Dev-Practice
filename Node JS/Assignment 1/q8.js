prompt = require('prompt-sync')()
function printMultiplicationTable(num) {
    for (let i=1;i<=10;i++)
    {
        console.log(i*num);
    }
}

num = parseInt(prompt("Enter the number: "))
printMultiplicationTable(num)
