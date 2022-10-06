// ** Introduction of trees
//  Tree is based on branching strategy
//  Root : The head node is called root or the top node is called root.
// Child : I node below the another node is called child node
// Parent : The node with children's are called parent node
// siblings : Group of node with same parent
// leaf : node with no child
// edge : Connection between is represented by edge
// ** Binary tree have two node at most
// lower value gets left side of the parent
// higher value node gets in the right side

// Node class BST

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return true;
    }
    // check if the value is greater than the node or root
    // if yes than put in right
    // no , insert on the left side
    // if there is already a node on the right or the left side then keep follow the rules for greater than right side less than left side
    let currentNode = this.root;
    while (currentNode) {
      if (val > currentNode.value) {
        if (currentNode.right) currentNode = currentNode.right;
        else break;
      } else {
        if (currentNode.left) currentNode = currentNode.left;
        else break;
      }
    }
    if (val > currentNode.value) {
      currentNode.right = newNode;
    } else currentNode.left = newNode;
    return this;
  }

  search(val) {
    if (!this.root) return false;
    if (this.root.value === val) return;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (current.val > val) {
        current = current.left;
      } else if (current.value < val) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
}

const bt = new BinarySearchTree();
bt.insert(10);
console.log(bt);
bt.insert(20);
console.log(bt);
bt.insert(5);
console.log(bt);
