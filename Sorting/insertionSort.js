// ** Insertion sort
// Start from the second element and consider the remaining left as other array.
// check if the second is less or not . If yes then insert before that.
// pick the next element and treat the other left for comparison and insert where necessary.
function insertionSort(array) {
    // start with the second element to compare with the first.
    for (let i = 1; i < array.length; i++) {
        const currentValue = array[i];
        for (var j = i - 1; j >= 0 && array[j] > currentValue; j--) {
            array[j + 1] = array[j];
        }
        array[j + 1] = currentValue;
    }
    return array

}

insertionSort([5, 3, 4, 1, 2]);