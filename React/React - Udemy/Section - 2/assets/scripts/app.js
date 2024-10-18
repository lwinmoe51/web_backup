// import { myName } from "./ulti";
// import { myAge } from "./ulti";
// import strTest from "./ulti"; //"strTest" is anyname i want
// import { myGfName as baby } from "./ulti";

// console.log(myName);
// console.log(myAge);
// console.log(strTest);
// console.log(baby);

//or
// import strTest from "./ulti";
// import { myName, myAge, myGfName as baby } from "./ulti"; //default export can't be import like that
// console.log(myName);
// console.log(myAge);
// console.log(strTest);
// console.log(baby);
//or

import * as ulti from "./ulti";

console.log(ulti.myName);
console.log(ulti.myAge);
console.log(ulti.default);
console.log(ulti.myGfName);

import { myFunction } from "./ulti";
myFunction();
