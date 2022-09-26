// similar to the singly linked list
// the only difference is doubly liked list node has a property which keep track of the previous node.

// Node :
//      val
//      next
//      prev
// doubly linked list
//      length
//      head
//      tail

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLikedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    // if the DLL is empty then update the tail and head to the newNode
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // update the tail and update both the next and the prev value.
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}
