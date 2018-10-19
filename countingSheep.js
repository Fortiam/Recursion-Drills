'use strict';

function countingSheep(totalSheepToJump){
    //base case 1st
    if(totalSheepToJump === 1){
        //here there are no more sheep to jump
       return console.log(totalSheepToJump + " - Another sheep jump over the fence");
    }//end if
    //General case
    //here there are sheep left to jump, log how many left, and then reduce by 1 and repeat.
    console.log(totalSheepToJump + " - Another sheep jump over the fence");
    return countingSheep(totalSheepToJump -1);
    

}

countingSheep(3);