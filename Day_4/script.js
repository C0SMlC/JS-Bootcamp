'use strict';

// Functions

// if (age >= 18) {
//   console.log('You are eligible');
// } else {
//   console.log('You are not eligible');
// }

// Function = piece of code, that we can reuse

// function declaration

function sayhello() {
  console.log('Hello');
}
// function isEligible(name, age) {
//   if (age >= 18) {
//     // pratik you are eligible !!!
//     // console.log(name + ' you are eligible !!!');
//     // template literal
//     console.log(`${name} you are eligible !!!`);
//     sayhello();
//   } else {
//     console.log('You are not eligible');
//   }
// }
// console.log(pratik + ' ' + Age);

// const name = 'Pratik';
// const age = 21;

// isEligible(name, age);

// camel case
// const anotherName = 'John';
// const anotherAge = 25;
// isEligible(anotherAge);

// Function declaration

// sayhello();

// function declaration

function sayhello() {
  console.log('Hello');
}

// function expression
const sayHello = function () {
  console.log('Hello');
};

// sayHello();

// Array

// Array is basically set of entities which shares similar traits

// Number
// const array = [1, 2, 3, 4, 5, 6];
// console.log(array);
// const PI = 3.14;

// Boolean

// const boolean = [true, false, true];
// console.log(boolean);

// String

//                 1        2       3         we thought
//                 0        1       2         actual
const names = ['Rachel', 'john', 'Ash'];
// console.log(names[2]);

// string
const name = 'Pratik';
// number
const age = 21;
// boolean
const hasDriversLicense = true;

// multiple type of data can be stored
const personInfo = [name, age, hasDriversLicense];

console.log(personInfo);
console.log(personInfo.length);

// valid
// personInfo[0] = 'john';
// personInfo[1] = 63;

// invalid
// personInfo = ['fenef', 46, false];
// console.log(name);
// console.log(personInfo);

// stack and heap
// varibale declare = stack, data stack is stored

const gender = 'male';
const pronouns = 'He';

// new element will be appended to the end
let arrayLength = personInfo.push(gender);
console.log(personInfo);
// console.log(arrayLength);

// new element will be appended to the start
arrayLength = personInfo.unshift(pronouns);
console.log(personInfo);
// console.log(arrayLength);

personInfo.pop();
console.log(personInfo);

personInfo.shift()
console.log(personInfo);

