function reverseInt(n) {
  const reversed = n.toString().split("").reverse().join("");
  return parseInt(reversed) * Math.sign(n);
}
console.log(reverseInt(500));
console.log(reverseInt(789));
console.log(reverseInt(-500));
console.log(reverseInt(-678));
