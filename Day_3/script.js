'use strict';

// // Logical Operations

// // And and OR
// // boolean
// let isIndian = true;
// let isNative = true;

// // &&
// //  if both the values are true
// console.log(isIndian && isNative);

// isIndian = false;
// // if one of the value is false
// console.log(isIndian && isNative);

// // Or logical Operator

// const truthy = true;

// const anotherFalsy = false;

// console.log(truthy || anotherFalsy);

// const age = 18;
// const hasLearnerLicense = true;

// // person >= 18 and learner License = true == driving license
// // true and true == true
// if (age >= 18 && hasLearnerLicense) {
//   console.log('You are eligible for a driving License');
// } else {
//   console.log('You are not eligible !!!');
// }

// Loops

// Doing ertain over and over

// Loop

// 1. For Loop
// 2. While Loop

// TaSK = Print 'Hello' 10 times onto the console

// console.log(' I am before the for loop');

// for (let i = 0; i < 3; i++) {
//   console.log('Hello');
// }

// console.log(' I am after the for loop');

// Iteration- 1
// i=0, i<3 = true
// i = i+1; i= 0+1=1
// Hello

// Iteration-2
// i=1
//  i=1, i<3 = true
// i=i+1, 1+1 =2
// Hello

// iteration- 3
// i=2
// 2<3= true
// i = i+1, 2+1 =3
// Hello

// iteration- 4
// i=3
// 3<3 // false

// while loop

// let i = 0;

// while (i < 3) {
//   console.log('Hello');
//   i = i + 1;
// }

// do...while()

// Ternary Operators
// let age = 21;

// if (age >= 18) {
//   console.log('You are eligible');
// } else {
//   console.log('You are not eligible');
// }

/// ? == if
/// : == else

// (age >= 18) ? console.log('You are eligible') : console.log('You are not eligible');

// factorial
// 5= 120
// 5! = 5*4*3*2*1

// for loop

let fact = 5;
let ans = 1;

for (let i = fact; i > 0; i--) {
  ans = ans * i;
}

// Iteration-1
// i=5, i>0 = true, i--
// ans = 1*5 = 5

// Iteration-2
// i=4, i>0 = true, i--
// ans = 5*4 = 20

// Iteration-3
// i=3, i>0 = true, i--
// ans = 20*3 = 60

// Iteration-4
// i=2, i>0 = true, i--
// ans =  60*2 = 120

// Iteration-4
// i=1, i>0 = true, i--                     0
// ans = 120*1 =120

// iteration-5
// i=0 0>0 = false


console.log(ans);
