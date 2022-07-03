// ** Bubble Sort(Shrinking sort)
// A sorting algorithm where the larger value is bubbles up to the top.
// In bubble sort we compare the adjacent element to each other and swap them.
// the greater element is swapped to the top (right of the array)

function bubbleSort(inputArray) {
    // ** swap variable to check if we swap the element or not.
    // ** if no swap was made we need to short circuit the loop.
    // ** because there is nothing to sort
    let noSwap;


    for (let index = inputArray.length; index > 0; index--) {
        // sorting logic.
        // this will run for once . 
        // need to short at every element
        noSwap = true;
        for (let j = 0; j < index - 1; j++) {
            if (inputArray[j] > inputArray[j + 1]) {
                // swap
                const temp = inputArray[j];
                inputArray[j] = inputArray[j + 1];
                inputArray[j + 1] = temp;
                noSwap = false;
            }
        }
        if (noSwap) break;
    }
    return inputArray;
}


console.log(bubbleSort([6, 8, 2, 4, 16, 18, 1]));




