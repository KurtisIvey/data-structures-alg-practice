/*
OBJECTIVES
    define what a queue is
    understand use cases for a queue
    implement operations on a queue data structure

what is a queue?
a first in first out data structure~ FIFO

How do we use them in programming?
    background tasks
    uploading resources
    printing / task processing

How do you implement a queue?
    doubly linked list can be utilized so the queue doesn't have to be reindexed
*/

class Node {
  constructor(value) {
    this.value = value; // The value stored in the node.
    this.next = null; // A reference to the next node in the queue.
  }
}

// The `Queue` class represents a queue data structure.
class Queue {
  constructor() {
    this.first = null; // Reference to the first node in the queue.
    this.last = null; // Reference to the last node in the queue.
    this.size = 0; // The number of nodes in the queue.
  }

  // Adds a new node with the given value to the end of the queue.
  enqueue(val) {
    let newNode = new Node(val); // Create a new node with the given value.

    if (!this.first) {
      // If the queue is empty (no first node exists), assign the new node to both `first` and `last`.
      this.first = newNode;
      this.last = newNode;
    } else {
      // If the queue is not empty, set the `next` property of the current last node to the new node.
      this.last.next = newNode;
      // Update the `last` reference to the new node, making it the new last node.
      this.last = newNode;
    }

    this.size++; // Increment the size of the queue.
  }

  // Removes and returns the value of the first node in the queue.
  dequeue() {
    if (!this.first) return null; // If the queue is empty, there is nothing to dequeue, so return null.
    let temp = this.first; // Store a reference to the first node in a temporary variable.

    if (this.first === this.last) {
      // If there is only one node in the queue, set `last` to null (as there won't be any nodes left after dequeue).
      this.last = null;
    }
    this.first = this.first.next; // Update the `first` reference to the next node, effectively removing the first node from the queue.
    this.size--; // Decrement the size of the queue.
    return temp.value; // Return the value of the dequeued node.
  }
}
