function decimalToBinary(decimal) {
    return (decimal >>> 0).toString(2);
  }
  
num = decimalToBinary(10);
console.log(num);