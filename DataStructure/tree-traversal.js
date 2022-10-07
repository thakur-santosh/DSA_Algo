// ** This is a general solution to traverse a tree. Irrespective of whether the tree is binary tree or binary search tree or any type of tree
// There are two type of traversing approach to traverse a tree.
// 1) Breadth first search. 2) Depth First search
//  ** Breadth first search
//     ------->   10
//                /\
//               /  \
//     ------> 6 --> 15
//             /\     \
//            /  \     \
//           /    \     \
//   -----> 3 ---> 8 --> 20
// In breadth first search we traverse the tree based on the sibling basis. As shown in the diagram
// the out put should be as follow [10 , 6, 15, 3, 8, 20]

// ** Depth first search traverse from top to bottom
//        |         10
//        |        /\
//        |       /  \
//       \/     6     15
//        |     /\     \
//       |    /   \     \
//      \/  /      \     \
//         3       8      20
// There is 3 type of depth search.
// 1) DFS - InOrder. 2)PreOrder. 3)PostOrder

// Node class
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
  // taking two array to achieve the BFS
  // queue will store the nodes and there respective children's in order
  // loop order the first index node and move to data once the respective children's are stores in queue in order
  // follow the same process once the queue is empty and return the data
  BFS() {
    let node = this.root,
      data = [],
      queue = [];
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }
}

const bt = new BinarySearchTree();
bt.insert(10);
console.log(bt);
bt.insert(20);
console.log(bt);
bt.insert(5);
console.log(bt);
