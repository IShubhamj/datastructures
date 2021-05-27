class Stack {
  #data; // Private variable

  constructor() {
    this.#data = [];
  }

  push(record) {
    return this.#data.push(record);
  }

  pop() {
    return this.#data.pop();
  }

  getStack() {
    return this.#data;
  }
}

const s = new Stack();
console.log("After creating first instance \n", s.getStack());
s.push(1);
s.push(2);
s.push(3);
console.log("Filled Stack \n", s.getStack());
s.pop();
console.log("After popped 1st element \n", s.getStack());

module.exports = Stack;
