class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.length++;
    this.tail = newNode;
    return this;
  }

  pop() {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;
    let previousNode = null;

    while (currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    if (!previousNode) {
      this.head = null;
      this.tail = null;
    } else {
      previousNode.next = null;
      this.tail = previousNode;
    }
    this.length--;
    return currentNode.data;
  }
  shift() {
    if (!this.head) {
      return null;
    }

    const shiftedNode = this.head;
    this.head = this.head.next;

    if (!this.head) {
      this.tail = null;
    }
    this.length--;
    return shiftedNode.data;
  }

  unshift(data) {
    var newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
    }
  }
  getIndex(index) {
    let counter = 0;

    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, val) {
    let foundNode = this.getIndex(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
  }
  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === this.length) this.push(val);

    if (index === 0) this.unshift(val);
    var newNode = new Node(val);
    // gets prev item
    var prev = this.getIndex(index - 1);
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;

    return true;
  }
  remove(index) {
    if (index < 0 || index > this.length) {
      return null;
    }
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    var previousNode = this.getIndex(index - 1);
    var removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }
  reverse() {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var next = null;
    var prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}
