// not a real name.
// Its just a common way to find a give string from the list of words.
// loop over the first string collection.
// then loop over the shorter string .
// increase the count when the string matches.

function naive_StringSearch(longerString, stringToBeMatched) {
    let counter = 0;
    for (let i = 0; i < longerString.length; i++) {
        for (let j = 0; j < stringToBeMatched.length; j++) {
            if (longerString[i + j] !== stringToBeMatched[j]) break;
            if (j === stringToBeMatched.length - 1) counter++;
        }
    }
    return counter;
}

console.log(naive_StringSearch("test bla test", "tes"));
