'use strict';
//Write a recursive function that reverses a string. return the new string.

function reverseString(stringy) {
    // Base case
    if (stringy.length === 1) {
        //here's the last letter
        return stringy;
    }
    
    // General case
    //here chop the first letter, recall the func on the rest, then re-add the first letter
    
    return reverseString(stringy.slice(1)) + stringy[0];
}

let testStr = "backwards";
console.log(reverseString(testStr));