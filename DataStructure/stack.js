//  Is a concept which follows LIFO (Last in first out concept)

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (this.size == 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
      //newNode.next = temp;
    }
    return ++this.size;
  }
  pop() {
    if (!this.size) return null;
    const temp = this.head;

    if (this.size == 1) {
      // update the last node
      this.last = null;
    }
    // here if the size if 1 then the this.first.next = null
    // else it will be the next element
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }
}

const stack = new Stack();
stack.push(2);
stack.push(3);
console.log(stack);
