// Problem Statement : Implement a queue using 2 stacks

const Stack = require("./DataStructure/Stack/Stack");

const s1 = new Stack();
const s2 = new Stack();
// Inserting values in stack1
s1.push("Red");
s1.push("Blue");
s1.push("Green");

console.log(s1.getStack());

// retrieving values in stack2 from stack1;
s2.push(s1.pop());
s2.push(s1.pop());
s2.push(s1.pop());

console.log(s2.getStack());
console.log(s1.getStack());

// retrieving values from stack 2 to work it like a queue
console.log(s2.pop());
console.log(s2.pop());
console.log(s2.pop());
