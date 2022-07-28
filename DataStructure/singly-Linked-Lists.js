// A data structure with head , tail and a length properties.
// consist of a node , each node has a length and a pointer to the next node or null (null if there is no next node)
//they are different as compare as compare to array.

// they don't have indices
// direct access of element is not allowed
// they have node which point to next node.


// create a node for the linked list.
// node consist of value and the next pointer
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// creating a SinglyLinkedList class
class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null; // each header is a node
        this.tail = null; // each tail is a node or null
    }
    // write a push method which will add a new node to the linked list
    push(val) {
        // create a new node
        const newNode = new Node(val);
        // check if head is null or not for the first node creation
        if (!this.head) {
            // first node creation , reference the head with newNode because the head and the tail will be same for the first node creation
            this.head = newNode;
            // same as above head coz its first time node creation
            this.tail = newNode; // this.tail is pointing to the same object as this.head
        } else {
            this.tail.next = newNode; // this.tail.next will also change the this.head.next because they are referring the same object
            this.tail = newNode;

        }
        this.length++;
        return this;
    }

    // normal traverse method to traverse through the linked list.
    traverse() {
        var current = this.head;
        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }

    // pop method.
    // if no node is found return undefined.
    // if nodes are present:
    // loop thought the node , find the last one and also keep track of 2nd last node.
    // remove the last node.
    // and set the 2nd last node as the new node.
    // decrease the length

    pop() {
        if (!this.head) return undefined;
        let currentHead = this.head;
        let newTail = this.head;
        while (currentHead.next) {
            newTail = currentHead;
            currentHead = currentHead.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (!this.length) {
            this.head = null;
            this.tail = null;
        }

        return currentHead;
    }

}

var first = new SinglyLinkedList();
first.push("Hi");
first.push("Hello");
first.push("You");

first.pop()
console.log(first);



