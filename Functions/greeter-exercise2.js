
let firstname = requireInfo("What is your first name?");
let lastname = requireInfo("What is your last name?");
console.log(`Hello, ${firstname} ${lastname}!`);



function requireInfo(text){

  let rlSync = require('readline-sync');
   return String (rlSync.question(text));

}

