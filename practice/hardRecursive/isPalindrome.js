/**
 write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome(reads the same forward and backward)
 otherwise it returns false
 */

/*
first set base cases~
if str.length is 1, return true
if has 2 chars, if str[0] === str[1] return true

if cases not satisfied, 
we are going to check chars at very end by comparing first char and last char
if they are the same, we create a new arr  by returning str.slice(1,-1) as the argument call in isPalindrome
// this creates a new arr without the first and last index,
if none of cases are satisfied, return false

*/

function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  // slice(1, -1) removes the first and very last char of the string
  // therefore isPalindrome is ran once again with a new shorted by the
  // first and last char string until base conditions are met
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}
