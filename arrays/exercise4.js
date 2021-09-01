let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];



let myArrayString = myArray.map(num => (num%2 === 0)?'even':'odd');
myArrayString.forEach(string =>console.log(string));