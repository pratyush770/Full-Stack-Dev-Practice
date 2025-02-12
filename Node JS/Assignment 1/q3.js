// 
function isPerfectNumber(num) {
    var temp = 0;
    for(var i=1;i<=num/2;i++) {
        if(num%i === 0) {
            temp += i;
        }
    }

    if (temp === num && temp != 0) {
        return "Perfect Number";
    } 
    else {
        return "Not a perfect Number";
    }
}

num = isPerfectNumber(6);
console.log(num);