/* Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 
Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters. */

/*
    we need to keep track of the characters in the first string because the rest must match as they're dependent to be a prefix
    use first index as tracker
    for loop to determine rest as all must be in compliance
*/

function longestCommonPrefix(arr) {
  let string = arr[0];
  let chars = "";
  // iterate through string.
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; i++) {
      if (string[j] == arr[i][j]) {
        chars += string[j];
      } else {
        break;
      }
    }
  }
}
