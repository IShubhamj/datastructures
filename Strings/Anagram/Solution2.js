let isAnagram = (strA, strB) => cleanupString(strA) === cleanupString(strB);
/* If both cleaned string according to below steps are identical then they are anagrams*/

let cleanupString = (str) =>
  str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");

/*
cleanup string is function which is responsible for
1 removing empty space
2 turn it back to lower case
3 built an array from it
4 sort it
5 and by joining again make a string from array
*/
console.log(isAnagram("stol", "lost")); // true
console.log(isAnagram("build", "buied")); // false
