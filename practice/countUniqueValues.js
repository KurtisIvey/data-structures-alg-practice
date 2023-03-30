/*
goal: count number of unique values in arr, do not count identical values, fail immediaely if arr is empty

set fail for empty arr

count from start to finish using multiple pointer pattern.

if arr.length === 1, unique value will be one

if arr[0] === arr[1], then move count on 2nd pointer to arr[2]
    add 1 to unique value for 1st pointer
    repeat and continue moving 2nd pointer until unique value is found
    add to unique value count upon finding 2nd value that's different. Switch first pointer to become the unique value found at said index
    add 2nd pointer to found index + 1

    repeat

once finished on length of arr, return count value

*/

// using native object "Set" to store unique values
function freqCount(arr) {
  console.time("test");
  let unique = [...new Set(arr)];
  console.log(unique.length);
  console.timeEnd("test");
}
console.log(freqCount([]));
console.log(freqCount([2]));
console.log(freqCount(["a", 1, 1, "a", 2, "1"]));

function countUniqueValues(arr) {
  console.time("test2");

  if (arr.length === 0) {
    return 0;
  }
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  console.log(i + 1);
  console.timeEnd("test2");
}

/* countUniqueValues([]);
countUniqueValues([0]);
countUniqueValues(["a", 1, 1, "a", 2, "1"]);
 */
