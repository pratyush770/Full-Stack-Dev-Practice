const fs = require('fs');

const secondsInMinute = 60;
const secondsInHour = secondsInMinute * 60;
const secondsInDay = secondsInHour * 24;
const secondsInYear = secondsInDay * 365;
const secondsInCentury = secondsInYear * 100;

const result = `Number of seconds in a year: ${secondsInYear}\nNumber of seconds in a century: ${secondsInCentury}`;
fs.writeFile('result.txt', result, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('Results written to file');
    }
  });
console.log(result);