class Queue {
  #data; // Private variable "by putting hash you can make variable private"

  constructor() {
    this.#data = [];
  }

  add(record) {
    this.#data.unshift(record);
    console.log(this.#data);
  }

  remove() {
    return this.#data.pop();
  }

  peek() {
    return this.#data[this.#data.length - 1];
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

module.exports = Queue;
