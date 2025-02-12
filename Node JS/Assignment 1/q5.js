function createArray(length) {
    let arr = new Array(length);
    const prompt = require('prompt-sync')();
    for (let i = 0; i < length; i++) {
        val = parseInt(prompt("Enter the value: "));
        arr[i] = val;
    }
    return arr;
}
  
function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}
  

function concatArrays(arr1, arr2) 
{
    return (arr1.concat(arr2));
}

const prompt = require('prompt-sync')();
length = parseInt(prompt("Enter the length: "));
arr = createArray(length);
console.log(arr);
sortedArr = sortArray(arr);
console.log(sortedArr);
length = parseInt(prompt("Enter the length: "));
arr2 = createArray(length);
concat = concatArrays(arr, arr2);
console.log(concat);