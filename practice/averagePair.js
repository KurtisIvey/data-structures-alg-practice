// determine if pair of integers in sorted arr can equal target value
// create left index, create right index
// while left index is less than right, pointers cannot cross or equal
// create avg of left and right value in arr
// if avg === target, return true
// if avg is less than target, left index ++ to raise avg value
// else if avg !== target within while loop parameters, right ++
//

function averagePair(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let avg = (arr[left] + arr[right]) / 2;
    if (avg === target) {
      return true;
    } else if (avg < target) {
      left++;
    } else {
      right--;
    }
  }
  return false;
}

console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
