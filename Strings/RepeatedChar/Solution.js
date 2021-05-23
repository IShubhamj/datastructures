function isRepeatingCharacter(str) {
  let map = buildCharMap(str);
  let repeatingChars = [];

  for (key in map) {
    if (map[key] > 1) {
      repeatingChars.push(key);
    }
  }

  return repeatingChars;
}

function buildCharMap(str) {
  let charMap = {};
  str.split("").forEach((char) => {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });
  delete charMap[" "];
  console.log(charMap);
  return charMap;
}

console.log(isRepeatingCharacter("I like coffee"));
console.log(isRepeatingCharacter("buy a phone"));
