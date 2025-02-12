function createArray(length) {
    let arr = new Array(length);
    const prompt = require('prompt-sync')();
    for (let i = 0; i < length; i++) {
        val = parseInt(prompt("Enter the value:"));
        arr[i] = val;
    }
    return arr;
}

function sumArray(arr) {
    return arr.reduce((a, b) => a + b, 0);
}
  
function removeElement(arr, value) {
    return arr.filter(item => item !== value);
}
  
//   // Usage example:
//   arr = [1, 2, 3, 4, 5];
//   arr = removeElement(arr, 3);
//   console.log(arr); // Output: [1, 2, 4, 5]

const prompt = require('prompt-sync')();
length = parseInt(prompt("Enter the length: "));
arr = createArray(length);
console.log(arr);
console.log(sumArray(arr));
num = parseInt(prompt("Enter the number you want to remove from the array: "));
console.log(removeElement(arr, num));