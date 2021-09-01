let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];
let myArrayModified = [];
myArrayModified = myArray.filter(num=> num%2 === 0);
myArrayModified.forEach(num=>console.log(num));

//standanswer,they didn't modify or make a new array
myArray.forEach(function(value) {
  if (value % 2 === 0) {
    console.log(value);
  }
});