'use strict';
function doubleArray(arrayToBeDoubled){
    //base case here
    if(arrayToBeDoubled.length === 1){
        //console.log("last number");
        arrayToBeDoubled[0] *=2;
        return arrayToBeDoubled;
    }
    //general case here
     //need to double the first index, of the new sliced array, combine first index with all the nested calls.
     arrayToBeDoubled[0] *=2;
    return Array.from([arrayToBeDoubled[0], ...doubleArray(arrayToBeDoubled.slice(1))]);//works with & without ...
}

let testArray = [1, 2, 3, 4, 5];
// Goal: result [2, 4, 6, 8 ,10];
console.log("result is: " + doubleArray(testArray));// 2,4,6,8,10
console.log(Array.isArray(doubleArray(testArray)));// true, cool