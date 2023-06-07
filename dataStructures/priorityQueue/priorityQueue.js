class PriorityQueue {
  constructor() {
    this.values = []; // Initialize an empty array to store heap values
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode); // Add the new element to the end of the array
    this.bubbleUp(); // Restore the heap property by moving the element up as necessary
  }

  bubbleUp() {
    let idx = this.values.length - 1; // Get the index of the last element
    const element = this.values[idx]; // Get the value of the last element
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2); // Calculate the index of the parent element
      let parent = this.values[parentIdx]; // Get the value of the parent element
      //.log(parentIdx); // Print the index of the parent element (for debugging)
      if (element.priority <= parent.priority) break; // If the element is less than or equal to the parent, stop the loop
      this.values[parentIdx] = element; // Replace the parent element with the current element
      this.values[idx] = parent; // Replace the current element with the parent element
      idx = parentIdx; // Update the current index to be the parent index
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority > element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority > element.priority) ||
          (swap !== null && rightChild.priority > leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx];
      this.values[swap] = element;
    }
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}
