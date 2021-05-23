// ES5 Fashion
function reverseString(str) {
  let reversedString = "";

  for (let char of str) {
    reversedString = char + reversedString;
  }

  return reversedString;
}

console.log(reverseString("hello"));
