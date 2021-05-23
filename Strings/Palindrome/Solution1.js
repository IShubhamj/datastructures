function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return reversed === str;
}

isPalindrome("abcba"); // true
isPalindrome("tiger"); // false
