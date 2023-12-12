function isPalindrome(string) {
  let reverseStr = string.split("").reverse().join("");
  return string === reverseStr;
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
