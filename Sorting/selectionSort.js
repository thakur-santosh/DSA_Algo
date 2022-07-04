// ** Selection sort
// compare the first element with the second one
// if the second element is smaller then store the index of the second in a variable
// then compare the second to third
// if third is smaller then replace the index with the latest one
// else don't do anything
// repeat the 4 and 5 line step till the end of array.
// Once the first iteration is complete then start the compression from the next index.


function selectionSort(array) {
    // loop over the array times
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;

        for (let j = i; j < array.length; j++) {
            if (array[minIndex] > array[j + 1]) {
                minIndex = j + 1;
            }
        }
        if (i !== minIndex) {
            let temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }

    }
    return array;
}

selectionSort([11, 8, 7, 1, 2, 13, 17]);
