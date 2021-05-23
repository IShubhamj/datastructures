function maxChar(str) {
  let map = buildCharMap(str);
  let max = 0;
  let char = "";

  for (key in map) {
    if (max < map[key]) {
      max = map[key];
      char = key;
    }
  }

  return char;
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
  console.log(charMap);
  return charMap;
}

console.log(maxChar("baaal"));
