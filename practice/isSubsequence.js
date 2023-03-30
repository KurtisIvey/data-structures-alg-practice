// two arguments
// verify if characters of first str, are present in the proper order of the second str
// use multiple pointer pattern

// convert both strings to arrays
// start pointer begin at 0 index of arr1, parse through arr2 start at index 0 until finding matching char
// once found, set 2nd start index at index found + 1
// increment 1st start index by 1,
// continue parsing through 2nd array and new 2nd start index
// repeat
// if unable to find at all return false

function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  // if there is no str, it's true by default
  if (!str1) return true;
  // while j has not reached the last index of str2, continue looping
  while (j < str2.length) {
    // once finding matching char, increment i
    if (str2[j] === str1[i]) i++;
    // i, can only reach the length of str1.length by finding all chars
    if (i === str1.length) return true;
    // if unable to find matching char, increment j
    j++;
  }
  return false;
}

console.log(isSubsequence("hello", "helfdslow world"));
