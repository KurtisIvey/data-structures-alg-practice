/*

*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchtree {
  constructor() {
    this.root = null;
  }
  /*
Insert PseudoCode
    Create a new Node instance with the given value.
    Check if the tree is empty by checking if this.root is null.
    If the tree is empty, set the new node as the root (this.root) and return the updated tree.
    If the tree is not empty, start at the root (this.root) and enter a loop.
    Compare the value to be inserted with the value of the current node (current.value).
    If the value is less than the current node's value, move to the left child.
    If the left child of the current node is null, set the new node as the left child and return the updated tree.
    If the left child of the current node is not null, update current to the left child and continue to the next iteration of the loop.
    If the value is greater than the current node's value, move to the right child.
    If the right child of the current node is null, set the new node as the right child and return the updated tree.
    If the right child of the current node is not null, update current to the right child and continue to the next iteration of the loop.
    Repeat steps 5-11 until a suitable spot for the new node is found.
*/
  insert(value) {
    const newNode = new Node(value); // Create a new node with the given value

    if (!this.root) {
      // If the tree is empty
      this.root = newNode; // Set the new node as the root
      return this; // Return the updated tree
    }

    let current = this.root; // Start at the root

    while (true) {
      if (value < current.value) {
        // If the value is less than the current node's value
        if (current.left === null) {
          // If the left child of the current node is null
          current.left = newNode; // Set the new node as the left child
          return this; // Return the updated tree
        } else {
          current = current.left; // Move to the left child and continue searching
        }
      } else if (value > current.value) {
        // If the value is greater than the current node's value
        if (current.right === null) {
          // If the right child of the current node is null
          current.right = newNode; // Set the new node as the right child
          return this; // Return the updated tree
        } else {
          current = current.right; // Move to the right child and continue searching
        }
      }
    }
  }
  find(value) {
    if (!this.root) return null;
    let current = this.root;
    while (true) {
      if (value === current.value) return current;
      else if (value > current.value) {
        if (current.right === null) return null;
        current = current.right;
      } else if (value < current.value) {
        if (current.left === null) return null;
        current = current.left;
      }
    }
  }
}
