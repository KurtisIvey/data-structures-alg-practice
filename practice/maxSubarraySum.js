// find the maximum sum of a sub-arr with the specified target length

// use sliding window pattern
// create tempSum and maxSum

// create sum of subarray to target length

// first create a for loop iterating through the start of the main arr to the target length to get maxSum

// then create another for loop that removes start index and adds next index
// then calculate new temp sum
// max sum will then be determined to be the larger number of the two

//

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
