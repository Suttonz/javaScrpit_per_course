let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

myObj.qux = 3;
let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

for (let key in myObj) {
  console.log(key);
}

//No, because the frist one only will withdraw the key belong to myObj itself
//but the second will log the keys that myObj inherts from myProtoObj