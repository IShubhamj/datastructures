// ES6 Fashion
function reverseString(str) {
  return str.split("").reduce((reversed, char) => char + reversed, "");
}

console.log(reverseString("hello"));
