'use strict';

// function declaration

// function sayHello(name) {
//   console.log('Hello ' + name);
// }

// sayHello('John');

// function expression

// const sayHi = function (name) {
//   console.log('Hello ' + name);
// }

// sayHi('John');

// function

// function sum(num1, num2) {
//   const addition = num1 + num2;
//   return addition;
// }

// const result = 10 * sum(20, 30);

// console.log(result);

// closure
// function result(num1, num2, num3) {
//   // num1 = 10
//   // num2 =20
//   // num3 = 30
//   const addition = num1 + num2; // 30
//   function mult() {
//     return (addition * num3);
//   }

//   return mult();
// }

// console.log(result(10, 20, 30));

//hoisting

// function decalaration
// function sayHello() {
//   console.log('Hello');
// }

// function expression

// sayHello();
// const sayHello = function () {
//   console.log('Hello');
// };

// console.log(PI);

// const PI = 3.14;

// Arrow function
// ES6  => 2015

// const sayHello = function () {
//   console.log('Hello');
// };

// // Arrow Functions
// const greetings = () => {
//   console.log('Hello again');
// };

// const sum = function (num1, num2) {
//   return num1 + num2;
// };
// const result1 = sum(10, 20);
// const result2 = addition(10, 20);

// const sum = (num1, num2) => num1 + num2;
// const addition = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(result1);
// console.log(result2);

// function calling another function
// function mult(num3, functionAddition) {
//   return num3 * functionAddition;
// }

// function functionAddition(num1, num2) {
//   return num1 + num2;
// }

// console.log(mult(10, functionAddition(20, 30)));

// function returning another function

// function greetings() {
//   console.log('Hey');
//   return function () {
//     console.log('Hello, from a function returning a function');
//   };
// }

// // function expression

// const returnedFunction = greetings();

// returnedFunction();
