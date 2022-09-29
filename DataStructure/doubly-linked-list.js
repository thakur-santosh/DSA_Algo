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
  // ** adds the  node at the end of the DLL
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
  // ** pop remove the node from the end of DLL
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
  // ** shift : remove from the beginning of the DLL
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
  // ** unshift : Add the node at the beginning of the current node.
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
  // ** get the element at specified index
  // Check if the length is 0 or index is greater than or equal to the dll length return undefined
  // In DLL we can traverse from head and tail both , because tail also stores the value of previous node
  // If the index is less then length / 2 then loop through the head toward middle return the node once it is found
  // If the index is greater than length /2 then loop through the tail  toward middle return the node once found
  get(index) {
    if (this.length < 0 || index >= this.length) return null;
    const middleIndex = Math.floor(this.length / 2);
    // check if the index is less , so that we can traverse from head else traverse from the tail
    let count, currentNode;
    if (index <= middleIndex) {
      count = 0;
      currentNode = this.head;
      while (count != index) {
        currentNode = currentNode.next;
        count++;
      }
    } else {
      count = this.length - 1;
      currentNode = this.tail;
      while (count != index) {
        currentNode = currentNode.prev;
        count--;
      }
    }
    return currentNode;
  }
  // ** set method , updates the value at the given index with the given value
  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    } else {
      return false;
    }
  }
  // ** insert : add a node at a specific index
  // check from where to traverse the list , i.e from head or from tail return false
  // check if index is valid or not
  // if index 0  unshift , i.e push to the DLL
  // if the length is last then push the node to dll
  // use get method to get the element
  // increment after updating the node
  // return true
  insert(val, index) {
    if (index < 0 || index > this.length) return false;
    if (index == 0) return !!this.unshift(val);
    if (this.length == index) return !!this.push(val);

    const prevNode = this.get(index - 1);
    const currentNode = prevNode.next;
    const newNode = new Node(val);

    prevNode.next = newNode;
    newNode.prev = prevNode;

    newNode.next = currentNode;
    currentNode.prev = newNode;

    this.length++;
    return true;
  }

  // ** remove : remove from the specified index
  // if the index is not valid (negative or more than the DLL) return false
  // if the index is same as the length-1 then use pop.
  // if index is 0 use shift
  // use get method to get the node
  // update the next and the prev
  // decrease the length
  // return the found node with prev and next node value updated as null
  remove(index) {
    if (index < 0 || index > this.length) return false;
    if (index == 0) return !!this.shift();
    if (index == this.length) return !!this.pop();

    let currentNode = this.get(index);
    let prevNode = currentNode.prev;
    let nextNode = currentNode.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    currentNode.next = null;
    currentNode.prev = null;
    this.length--;
    return currentNode;
  }
}

const dll = new DoublyLikedList();

dll.push(3);
dll.push(6);
dll.push(7);
dll.push(8);
dll.push(9);
dll.push(2);
dll.push(4);
dll.insert(5, 0);
console.log(dll.get(0));
console.log(dll);
