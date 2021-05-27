function countVowels(str) {
  let count = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  str
    .toLowerCase()
    .split("")
    .forEach((char) => {
      if (vowels.includes(char)) {
        count++;
      }
    });
  return count;
}

console.log(countVowels("Hello there"));
