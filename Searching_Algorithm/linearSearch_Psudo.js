// Linear Search Pseudo code.
// Create a function which accepts a array and a Value.
// loop through the array and check if the array element is equal to the value.
// if equals return true.
// else return false.

function pseudoLinearSearch(array, value) {
    for (let index = 0; index < array.length; index++) {
        if(array[index] === value ) return array[index] 
    }
    return -1;
}

pseudoLinearSearch([1,2,3] , 4)


// ** the same logic is used for pre-defined methods in Js. Like - indexOf.
// ** time complexity is best case -O(1) -- worst case-O(n)