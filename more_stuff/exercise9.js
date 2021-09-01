function isNot_minus_zero (number){

 if (0/number !== 0){
     return false;
 }  else{
   return true;
 }
}


function isNegativeZero(value) {
  return 1 / value === -Infinity;
}

/*This works since 1 / 0 returns Infinity and 1 / -0 returns -Infinity,
thus letting us make the distinction. You can divide any other number except 0 or -0 to 
achieve the same result.
*/



console.log(isNot_minus_zero(0));
//you can also use Object.is to determine if -0 is not 0
console.log(Object.is(0,-0));

