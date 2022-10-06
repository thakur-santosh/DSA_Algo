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
//       |    /  \     \
//      \/    /    \     \
//          3     8     20
// There is 3 type of depth search.
// 1) DFS - InOrder. 2)PreOrder. 3)PostOrder
