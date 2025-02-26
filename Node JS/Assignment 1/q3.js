prompt = require('prompt-sync')()
function isPerfectNumber(num) {
    var temp = 0;
    for(var i=1;i<=num/2;i++) {
        if(num%i === 0) {
            temp += i;
        }
    }

    if (temp === num && temp != 0) {
        return `${temp} is a perfect number`;
    } 
    else {
        return `${temp} is not a perfect number`;
    }
}

num = parseInt(prompt("Enter the number: "))
perfect = isPerfectNumber(num);
console.log(perfect);