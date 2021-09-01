let rlSync = require('readline-sync');
let age = Number(rlSync.question("How old are you?\n"));

for(let i = 10; i<= 40; i+=10 ){
  
  console.log(`In ${i} years ,you are ${age + i} years old.`);
}
