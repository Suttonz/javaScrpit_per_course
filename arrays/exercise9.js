let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function checkNumber(array){
  if(array.includes(3)){
    console.log('It includes 3');
  }else{
    console.log("It doesn't include 3");
  }
}

checkNumber(numbers1);
checkNumber(numbers2);
checkNumber(numbers3);