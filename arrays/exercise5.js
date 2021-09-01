let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers =  things.filter(element=> Number.isInteger(element));
console.log(integers);