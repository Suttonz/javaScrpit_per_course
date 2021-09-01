
/*let factorial =  n => {

  let result = 1;
  
    for (let i = n; i > 0; i -- ){
      
      result *= i;


    }
    console.log(result);

  }

factorial (5);*/

//refactor
result = 1;
function factorial_recurison(num){
  
  if(num > 0){
    result *= num;
    factorial_recurison(num-1);
    return result;
  }
}

// answer on the book

function factorial_correctAnswer(number){

  if(number === 1){
    return number;
  }

  return number * factorial_correctAnswer(number-1);
}

console.log(factorial_recurison(5));
console.log(factorial_correctAnswer(4));


