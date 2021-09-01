let input1 = 12;
let input2 = '123'

function isNotNumber(input){
  
  return (input !== input);

}
//This works since NaN is the only JS value that is not === to itself.

console.log(isNotNumber(input1));