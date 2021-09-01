let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
let oddLengths = function(arry){
  let arrytemp = arry.map(element => element.length);
  return arrytemp.filter(num => num%2 !== 0);
}
console.log(oddLengths(arr));