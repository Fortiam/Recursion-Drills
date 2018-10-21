'use strict';
//Write a recursive function that reverses a string. return the new string.

function reverseString(stringy) {
    // Base case
    if (stringy.length === 1) {
        //here's the last letter
        return stringy;//appended to the beginning of string
    }
    
    // General case
    //here move the last letter upfront, then pass on a smaller string?
    //return lastletter-->>upfront & call reverseString(only the letters after the first)// do time travel here
    return reverseString(stringy.slice(1)) + stringy[0];
}

let testStr = "backwards";
console.log(reverseString(testStr));