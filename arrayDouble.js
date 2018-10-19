'use strict';
let newArr =[];
function doubleArray(arrayToBeDoubled){
      
    //base case here
    if(arrayToBeDoubled.length === 1){
        //console.log("last number");
         newArr.push(arrayToBeDoubled[0] * 2);
         return newArr;
        //no more numbers left
    }

    //general case here
     //need to double the first index, of the new sliced array,
    //console.log("array here is: " + arrayToBeDoubled);
    return (newArr.push(arrayToBeDoubled[0] *2), doubleArray(arrayToBeDoubled.slice(1)));
}

let testArray = [1, 2, 3, 4, 5];
console.log(doubleArray(testArray));