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

// const s = new Stack();
// s.push(1);
// s.push(2);
// s.push(3);

// s.pop();

module.exports = Stack;
