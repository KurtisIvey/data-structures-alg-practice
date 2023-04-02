/*
    find length of longest substring before chracters repeat
    // take string, convert into object
    with for loop
    if(char in string is found in object) we then return with the object.key().length


*/

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      // this is how we increment the start of the window.
      // if the seen char in the object is incremented more than the current start, that indicates that is has been seen again
      // every time the start is adjust by 1, that becomes the new threshold for the key value in the seen object
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    // this is how we calculate the longest count of not seeing a repeated char. add 1 because of zero start index
    // longest is recalculated on every for loop pass
    longest = Math.max(longest, i - start + 1);

    // store the index of the next char so as to not double count
    // seen char is incremented in the object
    seen[char] = i + 1;
  }
  return longest;
}

console.log(findLongestSubstring("rithmschool"));

/* findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6 */
