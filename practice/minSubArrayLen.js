/*
parameters: array of positive integers , and a positive integer

find the smallest length of numbers or number that are equal to or "greater than" the target positive integer

use sliding window pattern

set left and right bound
right bound will be incremented in a while loop with if conditionals
if exceed target integer, left will be incremented and num count reset and right will be reset to new left num + 1
*/

function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  // setting minLen at infinity, so it's always the largest number, later to be overridden when small amount found equaling sum
  let minLen = Infinity;

  // cannot exceed length of nums array
  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right

    if (total < sum && end < nums.length) {
      console.log(`total${total}, start${start}, end${end}, minLen${minLen}`);
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= sum) {
      console.log(`total${total}, start${start}, end${end}, minLen${minLen}`);
      // Math.min returns the lowest of the integers passed into the argument
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      console.log(`total${total}, start${start}, end${end}, minLen${minLen}`);

      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

/* console.log(minSubArrayLen([2, 3, 1, 2, 9, 7], 7));
 */
/*
two params
find smallest length of contiguous subarray that is greater than or equal to sum
use sliding window pattern
create start and end var for indexing through num list
create total var to keep track, must have a running total to manipulate for sliding window pattern
limit start to run while loop so long as it's less than nums.length
create infinity var for minLen (later run compare via Math.mind(minLen , end - start))
first while loop add total += nums[end]
  if total < sum { end ++}
  else if(total >= sum){
    total -= nums[start]
    minlen = Math.min(minlen, end - start)
        start ++
    allows us to then test for a smaller length by incrementing 
  }
*/

function minSubArrLen(nums, sum) {
  let start = 0;
  let end = 0;
  let total = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    } else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    } else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95));
