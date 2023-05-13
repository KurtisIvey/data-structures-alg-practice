class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // push, add node to end
  push(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  // pop, remove last node
  pop() {
    if (this.length === 0) {
      return undefined;
    }
    const removedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // prev property present due to doublylinkedlist
      this.tail = removedNode.prev;
      // null because now there is no next node
      this.tail.next = null;
      // must eliminate link to doublylinkedlist so we set prev to null on removed node
      removedNode.prev = null;
    }
    this.length--;
    return removedNode.value;
  }
  // shift , remove first node
  shift() {
    if (this.length === 0) {
      return undefined;
    }
    const removedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedNode.next;
      this.head.prev = null;
      removedNode.next = null;
    }
    this.length--;
    return removedNode.value;
  }
  // unshift, add node to beginning
  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    if (index <= this.length / 2) {
      let count = 0;
      let current = this.head;
      while (count != index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      let current = this.tail;
      while (count != index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }
}
