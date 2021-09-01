let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

/*let oddLengths = function (array){
  let arrayOddNum = [];
  array.reduce((accumulater,element)=>((accumulater + element.length)%2 !== 0)? arrayOddNum.push(accumulater + element.length): accumulater=0,0);
  return arrayOddNum;
}*/

let oddLengths = function(array){
  return array.reduce((accumulaterArray,element)=>{
    
     if(element.length%2 !== 0){
       
      accumulaterArray.push(element.length);
     }
      return accumulaterArray;
  
 },[]);
}

//book standard answer
/*function oddLengths(strings) {
  return strings.reduce((filteredNumbersArray, letters) => {
    let length = letters.length;
    if (length % 2 === 1) {
      filteredNumbersArray.push(length);
    }

    return filteredNumbersArray;
  }, []);
}*/
let result = oddLengths(arr);
console.log(result);