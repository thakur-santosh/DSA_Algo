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

  // If there is no head or length = 0 , return undefined
  // store the current tail in a  variable so that we can return the tail removed value
  // If the length 1 set the head and the tail to be null
  // set the newTail .next property to null
  // decrement the length  by 1
  // return the removed tail
  pop() {
    // you can check the head or check for the length
    //if(!this.head) return undefined;
    if (this.length == 0) return undefined;
    const poppedTail = this.tail;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedTail.prev;
      this.tail.next = null;
      poppedTail.prev = null;
    }
    this.length--;
    return poppedTail;
  }
  //shift : remove from the beginning of the DLL
  // If length 0  , return undefined
  // length 1 , set head and tail to null
  // else , update the next head to the current head and update the current head prev to null
  // return the removed head.
  shift() {
    if (this.length == 0) return undefined;
    const oldHead = this.head;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  //unshift : Add the node at the beginning of the current node.
  // take a value , create a new node.
  // if length is 0 set the head and tail as new node.
  // else take the new created node and set it as a head .
  // set the next value as prev head.
  // set the prev value of the old head to new head.
  // set the prev value of the new node to null
  unshift(val) {
    const newHeadNode = new Node(val);
    if (this.length == 0) {
      this.head = newHeadNode;
      this.tail = newHeadNode;
    } else {
      this.head.prev = newHeadNode;
      newHeadNode.next = this.head;
      this.head = newHeadNode;
    }
    this.length++;
    return this;
  }
}

const dll = new DoublyLikedList();

dll.push(3);
dll.push(5);

console.log(dll.pop());
