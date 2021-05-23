let reverseInt = (n) =>
  parseInt(n.toString().split("").reverse().join("")) * Math.sign(n);

console.log(reverseInt(500));
console.log(reverseInt(789));
console.log(reverseInt(-500));
console.log(reverseInt(-678));
