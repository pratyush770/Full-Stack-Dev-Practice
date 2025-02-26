prompt = require('prompt-sync')()
function checkArmstrong(num) {
  let sum = 0;
  let rem = 0;
  let temp = num;
  while (num > 0) 
  {
    rem = num % 10;
    sum = sum + rem * rem * rem;
    num = Math.floor(num / 10);
  }
  if (sum === temp) {
    return `${sum} is an armstrong number`;
  } else {
    return `${sum} is not an armstrong number`;
  }
}

num = parseInt(prompt("Enter the number: "));
armstrong = checkArmstrong(num)
console.log(armstrong);