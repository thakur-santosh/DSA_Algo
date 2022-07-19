// Quick Sort
// follows the fact that array of 0 or 1 is always sorted.
// ** works by selecting on element (called the pivot) and find the index where the element should fall.
// we don't care if the left side or right side of the element is sorted or not.
// we make sure that the element is at the correct sorted position.
// follow the same for other elements.

// 🗃️** [5,2,1,8,4,7,6,3]
//   take the first element (5)
// **search thorough the whole array and find which are less than first element(5) and which are greater than first element(5)
// move the element (5) where it belongs, in such a way that less than elements are on the left side
// and the greater than element are on the right side
// the left and right side element need not to be sorted
// ***[3,2,1,4,  5  ,7,6,8]
// here 5 is at sorted position
// we need to repeat the same process in recursion
// next is number 3 element first
// [1,2,  3  ,4,5,7,6,8]
// next we check for 1

// [1  , 2,3,4,5,7,6,8]
// same we check for second element (2)
// [1, 2 ,3,4,5,7,6,8]

// here now the left hand side is sorted.
// now we will look to right side
