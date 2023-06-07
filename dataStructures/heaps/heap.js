/*
objectives
    define what a binary heap is
    compare and constrast min and max heaps
    impplement basic methods on a heap
    understand where heaps are used in the real world and what other data strucctures can be constructed from heaps

What is a Binary Heap?
    -very similar to a binary search tree, but with some different rules
    -in a MaxBinaryHeap, parent Nodes are always alrger than child nodes. In a MinBinaryHeap, parent nodes are always smaller than child nodes

Max Binary Heap
    - each parent has at most two child nodes
    - the value of each parent node is always greater than its child nodes
    - in a max binary Heap the parent is greater than the children, but there are no guarantees between sibling nodes
    - a binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first

Why do we need to know this?
    - Binary heaps are used ti implement priority queues, which are very commonly used data structures
    - also used quite a bit, with graph traversal algorithms
*/

class MaxBinaryHeap {
  constructor() {
    this.values = []; // Initialize an empty array to store heap values
  }

  insert(element) {
    this.values.push(element); // Add the new element to the end of the array
    this.bubbleUp(); // Restore the heap property by moving the element up as necessary
  }

  bubbleUp() {
    let idx = this.values.length - 1; // Get the index of the last element
    const element = this.values[idx]; // Get the value of the last element
    while (true) {
      let parentIdx = Math.floor((idx - 1) / 2); // Calculate the index of the parent element
      let parent = this.values[parentIdx]; // Get the value of the parent element
      console.log(parentIdx); // Print the index of the parent element (for debugging)
      if (element <= parent) break; // If the element is less than or equal to the parent, stop the loop
      this.values[parentIdx] = element; // Replace the parent element with the current element
      this.values[idx] = parent; // Replace the current element with the parent element
      idx = parentIdx; // Update the current index to be the parent index
    }
  }

  extractMax() {
    const max = this.values[0];
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
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
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

/*
    Removing (AKA EXTRACT MAX)

    - swap the first value in the values property with the last one
    - pop from the values property, so you can return the value at the end
    - have the new root "sink down" to the correct spot...
      - your parent index starts at 0(the root)
      - find the index of the left child: 2 * index + 1 (make sure its not out of bounds)
      - find the index of the right child: 2*index+2 (make sure its not out of bounds)
      - if the left or right child is greater than the element...swap. If both left and right children are larger, swap with largest child.
      - the child index you swapped to now becomes the new parent index.
      - keep looping and swapping until neither child is larger than the element
      - return the old root!
*/
