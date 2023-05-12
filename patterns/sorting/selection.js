/*
selection sort pseudocode

- store the first element as the smallest value you've seen so far.
- compare this item to the next item in the array until you find a smaller number
- if a smaller number is found, designate that smaller number to be the new 'minimum' and continue until end of arr
- if the 'minimum' is not the value (index) you initially began with, swap the two values
- repeat this with the next element until the array is sorted

*/

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    // implemented to save unnecessary swaps
    if (i !== lowest) {
      // designate temp to store arr[i] val
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }

  return arr;
}
