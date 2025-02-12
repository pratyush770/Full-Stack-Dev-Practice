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
    return "Armstrong number";
  } else {
    return "Not an Armstrong number";
  }
}

let num = checkArmstrong(153);
console.log(num);