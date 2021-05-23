class Queue {
  #data; // Private variable

  constructor() {
    this.#data = [];
  }

  add(record) {
    this.#data.unshift(record);
    console.log(this.#data);
  }

  remove() {
    this.#data.pop();
    console.log(this.#data);
  }

  getQueue() {
    return this.#data;
  }
}

const q = new Queue();
console.log("After instance creation \n", q.getQueue());
q.add(1);
q.add(2);
q.add(3);
console.log("Items in Queue \n", q.getQueue());
q.remove();
console.log("After removing a element \n", q.getQueue());
