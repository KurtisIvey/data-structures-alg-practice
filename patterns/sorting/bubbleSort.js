function bubbleSort(arr) {
  var noswaps;
  for (var i = arr.length; i > 0; i--) {
    noswaps = true;
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        //swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noswaps = false;
      }
    }
    if (noswaps) break;
  }
  return arr;
}

bubbleSort([37, 45, 29, 8]);
