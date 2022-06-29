//  helper function to contains the recursion function.
//  It is required sometime to call a recursion function from a function 
//  to retain the local variable data

// helper method sample
function outerFunction(input) {
    const outputArray = [];
    // here helper function is a recursion inside a normal function 
    // which will update the outputArray every-time it is called.
    // And at last it will return the outputArray as a result.
    function helper(helperInput) {
        // TODO : perform operation on outputArray
        // TODO :  write the base as here
        helper(helperInput --);
    }
    helper(input)

    return outputArray;
}


// Example  Helper method Recursion
function collectOddValues(numberArray){
    const oddArray = [];
    function helper(helperArray) {
        // base case
        if(helperArray.length === 0 ) return;
        if(helperArray[0] %2 !== 0 ) oddArray.push(helperArray[0])
        // recursion logic
        // update the input value also
        helper(helperArray.slice(1));
    }

    helper(numberArray);
    return oddArray;
}
collectOddValues([1,2,3,4]);