'use strict';
// We have synchronous

// this keyword

// console.log(this); // fisrt this

// whenever we log the this keyword inside a function it will be undfinded
// function calcAge(birthYear) {
//   return 2023 - birthYear;
// }

// the arrow function doest not get its own this keyword

// calcAge(2002);

// Object

// const personInfo = ['Jack', 20, 168, 78];

// const personInfo = {
//   name: 'Jack',
//   brithYear: 2005,
//   height: 172,
//   weight: 70,
//   marks: [80, 98, 78, 78, 52, 70],
//   calcAge: function () {
//     this.age = 2023 - this.brithYear;
//     return this.age;
//   },

//   isEligible: function () {
//     if (this.calcAge() > 18) {
//       console.log('You are eligible');
//     } else {
//       console.log('You are not eligible');
//     }
//   },
// };

// console.log(personInfo);
// console.log(personInfo.calcAge());
// console.log(personInfo);

// personInfo.isEligible();

// destructuring an object

// const { name, height } = personInfo;
// console.log(name, height);

// const studentInfo = {
//   name: 'Jack',
//   brithYear: 2005,
//   height: 172,
//   weight: 70,
//   marks: [80, 98, 78, 78, 52, 70],
//   calcAge: function () {
//     return 2023 - this.brithYear;
//   },

//   isEligible: function () {
//     if (this.calcAge() > 18) {
//       console.log('You are eligible');
//     } else {
//       console.log('You are not eligible');
//     }
//   },
// };

// const calcTeacherAge = studentInfo.calcAge;
// console.log(calcTeacherAge.call(teacherInfo));

// console.log(teacherInfo.calcTeacherAge());

// const teacherInfo = {
//   // key: value
//   name: 'Joe',
//   weight: 72,
//   height: 172,
//   subject: 'Maths',
//   brithYear: 1978,
// };

// console.log(Object.keys(teacherInfo));
// console.log(Object.values(teacherInfo));


