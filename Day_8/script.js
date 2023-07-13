// const rollNo = [1, 2, 3, 4, 5];

// const marks = [10, 20, 30, 40, 50];

// const total = [rollNo, marks];

// console.log(total[1]);

// nested Arrays
// [
//   [1, 2, 3, 4, 5],
//   [10, 20, 30, 40, 50],
// ];

// [1, 2, 3, 4, 5, 10, 20, 30, 40, 50];

// [1, 2, 3, 4, 5, 10, 20, 30, 40, 50];

// spread operator

// const total = [...rollNo, ...marks];

// console.log(total);
// [
//    1,  2,  3,  4,  5,
//   10, 20, 30, 40, 50
// ]

// console.log(...total);

// 1 2 3 4 5 10 20 30 40 50

// rest operator

// console.log(studentInfo[0]);
// console.log(studentInfo[1]);
// console.log(studentInfo[2]);
// console.log(studentInfo[3]);
// console.log(studentInfo[4]);

// 0-4

// for (let i = 0; i < 5; i++) {
//   console.log(studentInfo[i]);
// }
// let name;
// const restInfo = [];

// for (let i = 0; i < 5; i++) {
//   if (i === 0) {
//     name = studentInfo[i];
//   } else {
//     restInfo.push(studentInfo[i]);
//   }
// }

// console.log(name);
// console.log(restInfo);

// const name = ['Pratik', 'Jack'];

// destructcuring

// console.log(name, age, weight, height, favSubject);
// console.log(studentInfo);

// REST OPERATOR

// name = 'Jack';
// restInfo = [20, 60, 162, 'Maths'];

// Jack
// [(20, 60, 162, 'Maths')];

// const studentInfo = ['Jack', 20, 60, 162, 'Maths'];

//// ... rest                ... spread
// const [name, ...restInfo] = studentInfo;
// console.log(name);
// console.log(restInfo);

// const marks = [80, 98, 78, 78, 52];

// const newMarks = marks.map(function (currentElement) {
//   return currentElement * 2;
// });

// const sum = marks.reduce(function (accumulator, currentElement) {
//   accumulator = accumulator + currentElement;
//   return accumulator;
// });

// console.log(sum);

// let sum = 0;

// for (let i = 0; i < marks.length; i++) {
//   sum = sum + marks[i];
// }

// console.log(sum);

// const newMarks = marks.filter(function (curr) {
//   return curr >= 70;
// });

// console.log(marks.indexOf(78));

// console.log(marks.includes(999));

// spread operator
// rest operator
// destructuring an array
// loop over array
// couple methods for arrays

// const marks = [80, 98, 78, 78, 52, 70];

// marks.forEach(function (element) {
//   console.log(element);
// });

// Dates

const date = new Date();
console.log(date);

const timestamp = Date.now();
console.log(timestamp);
