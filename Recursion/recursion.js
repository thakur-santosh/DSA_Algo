// Recursion is a process which calls its self again and again 
// with a different set of parameters
// ** Base case : The condition when to stop the recursion of a function.
// **  Game plane for recursion -
//  1. Base case is a must (otherwise the function will stuck in a infinite loop)
//  2. Different input to the function (otherwise the function will stuck in a infinite loop)




// #1
// counting down from given number
function countDown(num){
    if(num <= 0 ) {
        console.log("All done");  
        return;
    }
    console.log(num);
    num--;
    // calling the countDown function itself with different input
    countDown(num);

}
countDown(4);

// #2
// factorial of a number 
function factorial(number) {
    // base case
    if(number === 1) return 1;
    // recurse with one number less
    return number * factorial(number - 1);
}
factorial(4)


// ** pitfall to be careful while using recursion
//  forget the base case (base case is must)
//  forget to return or returning wrong function 
//  stack overflow (happens because of infinite loop created because of above two)