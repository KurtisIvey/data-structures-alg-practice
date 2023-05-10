// find the maximum sum of a sub-arr with the specified target length

// use sliding window pattern
// create tempSum and maxSum

// create sum of subarray to target length

// first create a for loop iterating through the start of the main arr to the target length to get maxSum

// then create another for loop that removes start index and adds next index
// then calculate new temp sum
// max sum will then be determined to be the larger number of the two

//
/* 
function maxSubarraySum(arr, num) {
  let tempSum = 0;
  let maxSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2));
 */

/* function twoSum(arr, target) {
  if (arr.length === 0) return false;
  if (arr.length === 1 && arr[0] !== target) return false;

  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === target) {
      return [left, right];
    } else if (sum > target) {
      right--;
    } else {
      left++;
      right = arr.length - 1;
    }
  }
}

console.log(twoSum([-1, -2, -3, -4, -5], 6)); */

function merge(arr1, arr2) {
  let left = 0;
  let right = 0;
  let sortedCombinedArr = [];

  while (left < arr1.length && right < arr2.length) {
    if (arr1[left] <= arr2[right]) {
      sortedCombinedArr.push(arr1[left]);
      left++;
    }
    if (arr2[right] < arr1[left]) {
      sortedCombinedArr.push(arr2[right]);
      right++;
    }
  }
  while (left < arr1.length) {
    sortedCombinedArr.push(arr1[left]);
    left++;
  }
  while (right < arr2.length) {
    sortedCombinedArr.push(arr2[right]);
    right++;
  }
  return sortedCombinedArr;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  //mergeSort()
  // created mid point to guide slicing
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

console.log(mergeSort([2002, 5, 92, 6, 123, 200]));
