function isPalindrome(str) {
  return str.split("").every((char, index) => {
    return char === str[str.length - index - 1];
  });
}

console.log(isPalindrome("aba"));
console.log(isPalindrome("bcccd"));
