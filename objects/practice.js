let bob = {name:'Bob', age:22};
let studentBob = Object.create(bob);
studentBob.year = 'Senior';
studentBob.gender = 'male';
studentBob.school = 'uni';

//console.log(studentBob.age);

/*for(let prop in bob){
  console.log(bob[prop]);
}

for( let prop in studentBob){
 
   if(studentBob.hasOwnProperty(prop)){
     console.log(studentBob[prop]);
   }

}*/

let studentBobKeys = Object.keys(studentBob);
//console.log(studentBobKeys);

//studentBobKeys.forEach(key => console.log(studentBob[key]));

let studentBobValues = Object.values(studentBob);
//console.log(studentBobValues);

let studentBobEntrtiesArray = Object.entries(studentBob);
//console.log(studentBobEntrtiesArray);

let objA = { a: 'noob'};
let objB = { b: 'foab'};

//Object.assign(objA,objB);
let objFin = Object.assign({},objA,objB);
console.log(objFin);
console.log(objA);
