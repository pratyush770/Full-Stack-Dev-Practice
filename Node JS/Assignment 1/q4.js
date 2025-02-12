function countChar(str, char) {
    let count = 0;
    for(let i = 0; i < str.length; i++) {
      if(str.charAt(i) === char) {
        count++;
      }
    }
    return count;
  }

count = countChar("Hello World", "l");
console.log(count);