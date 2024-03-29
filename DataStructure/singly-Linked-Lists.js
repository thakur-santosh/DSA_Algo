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
    // shift : Removing the first element from the list.
    // to remove the first list from the node , make the next node as the head.
    // once shifting done return the shifted node. ie- the removed node.
    shift() {
        // return undefined if no node.
        if (!this.head) return undefined;
        let currentHead = this.head;
        let nextHead = this.head.next;

        this.head = nextHead;
        this.length--;
        if (!this.length) {
            this.tail = null;
        }
        return currentHead;
    }
    // unshift : Add a new head in the beginning.
    // to add the new node , add the node and point the tail to the old head
    unshift(val) {
        // check if there is no node.
        // if no node then made the head and tail to the same node.
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // ** approach one save the old node and then assign to head.next
            // const oldNode = this.head;
            // this.head = newNode;
            // this.head.next = oldNode;

            // ** approach 2 set newNode.next to the old head
            newNode.next = this.head;
            this.head = newNode;

        }

        this.length++;
        return this;

    }
    // get : accepts a index and return the node present at the specific node.
    // Array is more efficient when it comes to access the specific index element.
    get(index) {
        // return null if negative value 
        // return null if index is same or greater then linkedList
        if (index >= this.length || index < 0) return null;
        else {
            // loop through the linked list number of index times
            // find the node and return the node
            let count = 0;
            let current = this.head;
            // ** Alternate solution
            // while (count !== index)
            while (count < index) {
                // increase the count if not equal to index
                count++;
                current = current.next;

            }
            return current;
        }
    }
    // set : takes two argument value and index 
    // updated the specified element index with the given value.
    // use the get method to find the given node index.
    set(val, index) {
        // call the get method with the given index
        const searchedNode = this.get(index);
        if (searchedNode) {
            searchedNode.val = val;
            return true;
        } else {
            return false;
        }
    }
    // insert : insert the given value at the specified index.
    // @param(index , val);
    insert(index, val) {
        // check the index value, 
        // if index less then 0 or  greater than length return false
        if (index < 0 || index > this.length) return false;
        // if length equals to 0 , then update the head 
        // use the unshift method.
        if (index === 0) {
            return !!this.unshift(val);
        }
        // if index equal to length then use push method to update the tail.
        if (index === this.length) {
            return !!this.push(val);
        }
        // find the previous node with get method 
        // and update the value and point the next node to the current.
        const newNode = new Node(val);
        const preNode = this.get(index - 1);
        const temp = preNode.next;
        newNode.next = temp;
        // ** alternate
        //newNode.next = this.get(index);
        preNode.next = newNode;
        this.length++;
        return true
    }
    // remove : remove the node node from a specific index
    // @param(index)
    remove(index) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.shift();
        if (index === this.length - 1) return !!this.pop();

        // use the get method to get the previous node and set the node.next to next node
        var preNode = this.get(index - 1);
        preNode.next = preNode.next.next;
        this.length--;
        return preNode.next;
    }
    // reverse the linked list
    // reverse the method.
    reverse() {
        const node = this.head;
        // change the head to tail
        this.head = this.tail;
        // change the tail to head
        this.head = node;
        const prev = null;
        let next;
        // loop over 
        for (let index = 0; index < this.length; index++) {
            next = node.next;
            node.next = null;
            prev = node;
            node = next;
        }
        return this;
    }
}

var first = new SinglyLinkedList();
first.push("Hi");
first.push("Hello");
first.push("There");
// console.log(first);
first.insert(1, "1")
first.remove(3)
console.log(first);



