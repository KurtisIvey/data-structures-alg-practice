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

// recursive
function isSubsequence(str1, str2) {
  // str1 only reaches length 0 by being sliced successfully upon match
  if (str1.length === 0) return true;
  // str2 is reduced to length 0 whenever str1 is unable to find matches for all chars through
  if (str2.length === 0) return false;
  // if first char matches, slice first chars and recursively run isSubSequence again
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  // no match found while iterating, proceed to slice first char of str2 and recursively run is subsequence again
  return isSubsequence(str1, str2.slice(1));
}
