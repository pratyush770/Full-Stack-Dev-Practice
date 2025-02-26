prompt = require('prompt-sync')()
function countChar(str, char) {
    let count = 0;
    for(let i = 0; i < str.length; i++) {
      if(str.charAt(i) === char) {
        count++;
      }
    }
    return `The occurence of ${char} in ${str} is ${count} times`;
  }


string = prompt("Enter the string: ")
char = prompt("Enter the character: ")
count = countChar(string, char);
console.log(count);