/*
Sure! QuickSort is a popular sorting algorithm that uses a divide-and-conquer approach to sort 
an array. It works by selecting a pivot element from the array, partitioning the array 
around the pivot, and then recursively sorting the subarrays on either side of the pivot.
*/

function quickSort(arr) {
  // base case: an array with 0 or 1 elements is already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // select a pivot element
  const pivot = arr[Math.floor(Math.random() * arr.length)];

  // partition the array around the pivot
  const left = [];
  const equal = [];
  const right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] === pivot) {
      equal.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // recursively sort the subarrays
  return quickSort(left).concat(equal, quickSort(right));
}

/*
  Let's break down how this code works:

1.The quickSort function takes an array arr as input.
2.The base case checks if the array has 0 or 1 elements. If so, it is already sorted and we can 
 return it as-is.
3.If the array has more than 1 element, we select a pivot element from the array. 
I   n this implementation, we choose a random element as the pivot to improve performance on average.
4.We partition the array into three subarrays: left containing elements smaller than the pivot, 
    equal containing elements equal to the pivot, and right containing elements larger than the pivot.
5.We then recursively call quickSort on the left and right subarrays, and concatenate the results
    with the equal subarray in the middle to produce the final sorted array.


*/
