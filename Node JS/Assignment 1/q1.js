function printPrimeNumbers(min, max) {
    for (let i = min; i <= max; i++) {
      if (isPrime(i)) {
        console.log(i);
      }
    }
  }
  
  function isPrime(num) {
    for (let i = 2; i < Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  }
  
  printPrimeNumbers(10, 50);