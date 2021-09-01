rlSync = require('readline-sync');
let input = Number(rlSync.question('Enter a number:'));
let evenOrOdd = num => num%2 === 0 ? 'even':'odd';
console.log(evenOrOdd(input));

