// determine if pair of values exist in arr that create an average equal to target value

// set left value to be start, and right value to be end of arr

// avg out left and right index position

// if does not equal target and its still greater than target, decrement right value

// when avg is less than target, increment left value

// repeat until target is found

// if arr is empty, return false

// try to solve using multiple pointer pattern

function averagePair(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let avg = (arr[left] + arr[right]) / 2;
    console.log(`left${arr[left]}, right${arr[right]}, avg${avg}`);
    if (avg === target) {
      return true;
    } else if (avg < target) {
      console.log("incrementing left");
      left++;
    } else {
      console.log("decrementing right");
      right--;
    }
  }
  return false;
}

console.log(averagePair([], 2.5));
console.log(averagePair([2, 3], 2.5));
console.log(averagePair([1, 2, 3, 5, 8], 2.5));
