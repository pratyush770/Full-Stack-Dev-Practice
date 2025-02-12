function welcomeMessage() {
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        console.log("welcome to node js");
      }, 2000 * i);
    }
  }
  
  welcomeMessage();