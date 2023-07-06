'use strict';

// getting a upper limit from user
// let upperLimit = prompt('Enter the upper limit');

// if (upperLimit === '') {
//   upperLimit = 20;
// }

let upperLimit = 10;
// generating a random number between 1 to upperlimit

// it will generate a random number between 0 to 1
// we want a random number should be in between 1 to 10

// const floatNumber = Math.random() * upperLimit;
// console.log(floatNumber);

// console.log(Math.trunc(floatNumber) + 1);

// Math.random() => random number between 0 to 1
// Math.random() * upperLimit => random number between 0 to (upperlimit-1)
// Math.trunc(Math.random() * upperLimit) + 1  => random number between 1 to upperlimit

let remainingAttempts = 10;
const randomNumber = Math.trunc(Math.random() * upperLimit) + 1;
console.log(randomNumber);
const userEnteredNumber = document.querySelector('.guess');
const checkButton = document.querySelector('.check');
const message = document.querySelector('.message');
const body = document.querySelector('body');
const hiddenNumber = document.querySelector('.number');
const remainingAttemptsElement = document.querySelector('.score');

console.log(remainingAttemptsElement);
// Event Listener

checkButton.addEventListener('click', function () {
  let value = userEnteredNumber.value; //currenlty datatype is string 10
  // '788' = 788 => this two are not equal
  value = Number(value);
  // alert('Number is - ' + value);
  if (value === randomNumber) {
    message.textContent = 'You Won!!!';
    body.style.backgroundColor = '#60b347';
  } else if (value > randomNumber) {
    message.textContent = 'Entered value is greater';
    score = score - 1;
    remainingAttemptsElement.textContent = score;
  } else if (value < randomNumber) {
    message.textContent = 'Entered value is lesser';
    score = score - 1;
    remainingAttemptsElement.textContent = score;
  }
});

// making the random number visible when question mark is clicked

hiddenNumber.addEventListener('click', function () {
  hiddenNumber.textContent = randomNumber;
});
