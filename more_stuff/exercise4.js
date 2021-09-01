array1 = [1,6,3,8];
array2 =[-1,-6,-3,-2];
array3 =[2,2];


function findMaxNum(array){

  let temp;
    for(let i = 0; i < array.length; i++){
      for(let j = 1; j < array.length; j++){
          if (array[i] < array[j]){
               temp = array[i];
               array[i] = array[j];
               array[j] = temp;
          }
        }
    } 
    return array[0];
    
}
console.log(Math.max(array1));


console.log(findMaxNum(array1));