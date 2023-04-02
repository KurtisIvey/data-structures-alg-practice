/*
    find length of longest substring before chracters repeat
    need var for longest to compare with the current amount seen versus what has been seen
    going to use an object to keep track of what has been seen. When seen, we increment or add to object
    need start var for the start of the window. 
    because we are going to iterate through the string, we need a for loop(also functions as end of window)
      we start off with an empty object, intially start is at 0, when we see a new key, we add it to object 
      also calc longest var, use math.max comparing past longest to index of i - start + 1
      if(char is in object)
      we then increment start


*/

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  // the for loop i count is the end of the window
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      // this is how we increment the start of the window.
      // if the seen char in the object is incremented more than the current start, that indicates that is has been seen again
      // the seen char is set to a value automatically by the i count of the for loop + 1 at the end of the for loop
      // therefore, when compared via math.max, it will then increment start automatically because seen char will always be higher
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
