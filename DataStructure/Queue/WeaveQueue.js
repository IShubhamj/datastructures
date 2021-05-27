/* merge two queue in single queue but element's should be alternating fashion.
eg => 
 q1 = [1,2,3];
 q2 = ['hi'];

 q3 = [1, 'hi', 2, 3];
*/

const Queue = require("./Queue");

function Weave(source1, source2) {
  const q = new Queue();
  while (source1.peek() || source2.peek()) {
    if (source1.peek()) {
      q.add(source1.remove());
    }
    if (source2.peek()) {
      q.add(source2.remove());
    }
  }
  return q;
}
const q1 = new Queue();
q1.add(10);
q1.add(20);
q1.add(30);
const q2 = new Queue();
q2.add("Hi");
q2.add("there");
const weavedQueue = Weave(q1, q2);

console.log(weavedQueue);
