/*
Insertion sort pseudocode

- start by picking the second elem in arr
- now compare the second elem with the one before it and swap if nececessary
- continue to the next element and if it is in the incorrect order, iterate through the sorted position(i.e. the left side) to place the elem in the correct place
- repeat until the arr is sorted

*/

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

/*
1,3,9,5
//1st pass
current val = 3, j = 0, arr[j] is less than current val, so we break out of sub for loop
// 2nd pass i=2
current val = 9, j = 1, arr[j] less than 9 so break out
// 3rd pass i = 3
current val = 5, j = 2, arr[j] greater than arr[3] 
reach sub for loop logic, arr[3] redefined to have value of arr[2]
therefore, vals are swapped, arr = 1,3,5,9 
9 was the defined via arr[j+1] and swapped




*/
