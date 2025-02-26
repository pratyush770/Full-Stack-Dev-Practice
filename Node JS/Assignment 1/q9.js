prompt = require('prompt-sync')()
function decimalToBinary(decimal) {
    return (decimal >>> 0).toString(2);
  }

num = parseInt(prompt("Enter the number: "))
binary = decimalToBinary(num);
console.log(binary);