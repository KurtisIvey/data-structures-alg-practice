class node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// replication of stack call ~ last in first out

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    var newNode = new Node(val);
    // nothing there, so automatically set first and last to new node created
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // first indicates the first item to be out of the stack via last in first out
      let temp = this.first;
      // temp var to manipulate and link to new first that will be added through newNode;
      // this.first assigned to newNode
      this.first = newNode;
      // next in call stack woudl be old first that is defined to the var temp
      this.first.next = temp;
      // now posess link through addition of new node to old node that was first on callstack
    }
    return ++this.size;
  }

  pop() {
    if (!this.first) return null; // If the list is empty, return null

    let temp = this.first; // Store a reference to the first node in a temporary variable

    if (this.first === this.last) {
      // If there is only one node in the list (first and last are the same node)
      this.last = null; // Set the last node to null since it will be removed
    }

    this.first = this.first.next; // Update the first node to point to the next node in the list
    this.size--; // Decrement the size of the list
    return temp.value; // Return the value of the removed node
  }
}
