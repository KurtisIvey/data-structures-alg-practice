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
    console.log(`current longest${longest}, , current start ${start}`);
    console.log(seen);
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
      console.log(`start redefined to ${start}`);
    }
    // index - beginning of substring + 1 (to include current in count)
    console.log(
      `longest about to be compared to redefine, current longest ${longest}, i: ${i}, start ${start}`
    );
    longest = Math.max(longest, i - start + 1);

    // store the index of the next char so as to not double count
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
