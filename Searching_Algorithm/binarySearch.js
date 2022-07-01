// Binary search  uses divide and conquer method.
// ** Binary search only works if the Array is sorted.
// ** If the array is not sorted the binary search wont work.

// Find the element on any array based on a given value.
// Take the middle part of array and check if the middle element is the value you want or not.
// if not the divide the array and the check which side of array is required based on the value is greater or smaller.
// if the searching value is greater then middle value take the right part of array . 
// else take the left part of the array . 
// repeat the process until you find the value == middle value


// while(condition)
//     {statement}

// while loop runs until the condition is false or there is a break inside the statement.

function pseudo_BinarySearch(sortedArray, valueToBeSearched) {
    // need three variable
    // left pointer , right pointer , middle pointer
    let leftPointer = 0;
    let rightPointer = sortedArray.length - 1;
    let middlePointer = Math.floor((leftPointer + rightPointer) / 2);

    // while condition to loop till the value is matched. 
    while (sortedArray[middlePointer] !== valueToBeSearched && leftPointer <= rightPointer) {
        if (sortedArray[middlePointer] < valueToBeSearched) {
            leftPointer = middlePointer + 1;
        } else {
            rightPointer = middlePointer - 1;

        }
        middlePointer = Math.floor((leftPointer + rightPointer) / 2);
    }
    if (sortedArray[middlePointer] === valueToBeSearched)
        return middlePointer;
    return -1
}
console.log(pseudo_BinarySearch([1, 2, 3, 4], 4));