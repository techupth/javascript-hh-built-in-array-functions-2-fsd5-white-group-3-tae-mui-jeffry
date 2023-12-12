function isPalindrome(string) {
  let reverseString = "";
  for(let i = string.length - 1; i >= 0; i--) { //ให้ i = ตัวสุดท้ายของ string
    reverseString += string[i]; //ค่อยๆเอา char ยัดใส่ reverse
  }
  if (reverseString === string)
    return (true);
  else
    return (false);
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false