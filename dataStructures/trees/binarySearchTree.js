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
  contains(value) {
    if (this.root === null) return false; // Check if the tree is empty
    let current = this.root, // Start from the root node
      found = false; // Initialize a variable to track if the value is found

    while (current && !found) {
      // Loop while there is a current node and value is not found
      if (value < current.value) {
        // Value is less than the current node's value
        current = current.left; // Traverse to the left child node
      } else if (value > current.value) {
        // Value is greater than the current node's value
        current = current.right; // Traverse to the right child node
      } else {
        // Value matches the current node's value
        return true; // Value is found in the tree
      }
    }

    return false; // Value is not found in the tree
  }
  BFS() {
    let node = this.root; // Start from the root node
    let data = []; // Array to store node values in BFS order
    let queue = []; // Queue to process the nodes
    queue.push(node); // Add the root node to the queue
    while (queue.length) {
      // Continue while there are nodes in the queue
      node = queue.shift(); // Retrieve the first node from the queue
      data.push(node); // Add the node's value to the data array
      if (node.left) {
        // If the node has a left child
        queue.push(node.left); // Add the left child to the queue
      }
      if (node.right) {
        // If the node has a right child
        queue.push(node.right); // Add the right child to the queue
      }
    }
    return data; // Return the array of node values in BFS order
  }
  DFSPreOrder() {
    let data = [];
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
  DFSPostOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }
  DFSInOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}
