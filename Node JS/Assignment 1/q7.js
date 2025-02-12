class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.isEmpty()) {
        return "Stack is empty.";
      }
      return this.items.pop();
    }
  
    peek() {
      if (this.isEmpty()) {
        return "Stack is empty.";
      }
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    clear() {
      this.items = [];
    }
  }
  
  const myStack = new Stack();
  myStack.push(1);
  myStack.push(2);
  myStack.push(3);
  console.log(myStack.peek()); // Output: 3
  console.log(myStack.pop()); // Output: 3
  console.log(myStack.size()); // Output: 2