function isPalindrome(string) {
  let characters = string.split("")
  let reversedCharacters = characters.reverse();
  let reversedString = reversedCharacters.join("")
  if (string === reversedString) {
    return true
  } else {
    return false
  }
}
//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("noon")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
