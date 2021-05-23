/* Problem statement: check if given 2 strings are anagrams or not
Definition - An anagram is a word or phrase formed by rearranging the letters 
of a different word or phrase,typically using all the original letters exactly once.
*/

function isAnagram(s1, s2) {
  charMap1 = createCharMap(s1);
  charMap2 = createCharMap(s2);

  // if both object contain same length of keys or not
  if (Object.keys(charMap1).length !== Object.keys(charMap2).length) {
    return false;
  }
  // check if Keys are present and have equal values
  return Object.keys(charMap1).every(
    (key) => charMap2.hasOwnProperty(key) && charMap2[key] === charMap1[key]
  );
}

// function to create a map of string
function createCharMap(s) {
  let charMap = {};
  // split string in characters and iterate over every character
  s.split("").forEach((char) => {
    //check if key is not already present
    if (charMap[char]) {
      charMap[char]++; // add a with initial value one
    } else {
      charMap[char] = 1; // key is already present just need to update value by one
    }
  });
  delete charMap[" "]; // ignoring blank spaces for comparison
  console.log(charMap);
  return charMap;
}

console.log(isAnagram("stol", "lost")); // true
console.log(isAnagram("build", "buied")); // false
