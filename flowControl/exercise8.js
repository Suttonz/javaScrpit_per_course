rlSync = require('readline-sync');
let input = Number(rlSync.question('Enter a number:'));
let numRange = num => {
  if (num >= 0 && num <= 50){
    console.log(`${num} is between 0 and 50`);
  }
  else if (num>= 51 &&  num <= 100 ){
    console.log(`${num} is between 51 and 100`);
  }
  else if (num> 100 ){
    console.log(`${num} is greater than 100`);
  }
  else {
    console.log(`${num} is smaller than 0`);
  }
}

numRange(input);