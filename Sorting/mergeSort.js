// ** Merge Sort
// It is a combination of Splitting up Merging and Sorting
// Concept behind merge sort :
// Array of 0 or 1 will always be sorted.
// Decomposing the array into smaller array of 0 and 1 and then while merging
// we check in which one smaller and then put them accordingly.

//  Example :
//                        [8,3,5,4,7,6,1,2]
// split the array into two parseInt
//             [8,3,5,4]                    [7,6,1,2]
// repeat the same process till the array is in the form of single length
//           [8,3]       [5,4]                [7,6]    [1,2]
//         [8]  [3]     [5]  [4]           [7]  [6]   [1]  [2]
// Once the \array/ are in\ the/ form of sing\le /length\ co/mpare the element and put them together in sorting order
//           \   /         \  /               \ /        \ /
//            \ /           \/                 \/         \/
//          [3,8]         [4,5]             [6,7]        [1,2]
//              [3,4,5,8]                       [1,2,6,7]
//                         [1,2,3,4,5,6,7,8]      Sorted Array.




// Case 1.
// Merging the sorted array.
// Lets assume that we have two sorted array.
// [1 , 10 , 50]    [2,14,99,100]
// compare the first element of each array
// if first is smaller then push into a new array
// then move the pointer of the first array to the next one and compare the second element of the 1st array to the first element of second.
// if first element of 2nd array is smaller then push into the new array created above.
// then move the pointer of the 2nd array to the second element.
// ... and repeat this process. 
// Trying to give a visual representation 😅
//  _              _                      new array
// [1 , 10 , 50]  [2,14,99,100]           [1]
//      _          _
// [1 , 10 , 50]  [2,14,99,100]           [1,2]
//       _            _
// [1 , 10 , 50]  [2,14,99,100]           [1,2,10]
//            _         _
// [1 , 10 , 50]  [2,14,99,100]           [1,2,14]
//                       _
// [1 , 10 , 50]  [2,14,99,100]           [1,2,14,50]
// **Once the first array is completed then put the remaining rest from the second array list to the end of the array
// **because the array are sorted
// [1,2,14.50,99,100]

// first approach
function mergeTwoSortedArray(firstArray, secondArray) {
    let firstArrayPointer = 0;
    let secondArrayPointer = 0;
    // uncomment remainingArray if using first approach
    // let remainingArray = [];
    let sortedArray = [];
    while (firstArrayPointer < firstArray.length && secondArrayPointer < secondArray.length) {
        if (firstArray[firstArrayPointer] < secondArray[secondArrayPointer]) {
            sortedArray.push(firstArray[firstArrayPointer]);
            firstArrayPointer++;
        } else {
            sortedArray.push(secondArray[secondArrayPointer]);
            secondArrayPointer++;
        }
    }
    // **first approach for the rest of array push
    // if (secondArrayPointer >= secondArray.length) {
    //     remainingArray = firstArray.slice(firstArrayPointer)
    // }
    // if (firstArrayPointer >= firstArray.length) {
    //     remainingArray = secondArray.slice(secondArrayPointer)
    // }
    // return sortedArray.concat(remainingArray);

    // second approach to push the remaining array
    // push remaining part of first array if left from first iteration
    while (firstArrayPointer < firstArray.length) {
        sortedArray.push(firstArray[firstArrayPointer]);
        firstArrayPointer++;
    }
    // push remaining part of second array if left from first iteration
    while (secondArrayPointer < secondArray.length) {
        sortedArray.push(secondArray[secondArrayPointer]);
        secondArrayPointer++;
    }

    return sortedArray;

}
//console.log(mergeTwoSortedArray([4, 5], [2, 3, 5, 53]));


// merge sort Logic.
// divide array into smaller till the length is one.

// ********Merge Sort logic algorithm
function mergeSort(arr) {
    // base case for recursion
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    // need to call the mergeSort again to the left and right half 
    const firstHalf = mergeSort(arr.slice(0, mid));
    const secondHalf = mergeSort(arr.slice(mid));
    return mergeTwoSortedArray(firstHalf, secondHalf);
}

mergeSort([1, 2, 63, 43, 7, 8, 9]);