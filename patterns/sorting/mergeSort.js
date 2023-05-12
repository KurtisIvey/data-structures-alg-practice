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
