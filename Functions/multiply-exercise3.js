

multiply(requireNumber('Enter the first number:'),requireNumber('Enter the second number:'));

function requireNumber(text){

  let rlSync = require('readline-sync');
  return Number(rlSync.question(text));

}

function multiply(num1,num2){
  
  console.log(`${num1} * ${num2} = ${num1*num2}`);
}