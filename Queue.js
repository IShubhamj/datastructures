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
}

const q = new Queue();
q.add(1);
q.add(2);
q.add(3);
q.remove();
