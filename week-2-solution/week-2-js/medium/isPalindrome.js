/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = "" + str;
  let rev = str.split("").reverse().join("");
  if (str===rev)
    return true;
  else
    return false;
}

const value = isPalindrome('ABBA');
console.log(value);