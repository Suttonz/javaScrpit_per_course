let array = [3, 5, 7];
let sum = function (arrInput){
 return arrInput.reduce((accumulater,element)=>
 accumulater+element*element,0);
}
console.log(sum(array));