// Recursion is a process which calls its self again and again 
// with a different set of parameters
// **  Game plane for recursion -
//  1. Base case is a must (otherwise the function will stuck in a infinite loop)
//  2. Different input to the function (otherwise the function will stuck in a infinite loop)



// sample recursion example : 
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