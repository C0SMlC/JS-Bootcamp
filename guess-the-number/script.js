'use strict';

let upperLimit = prompt('Enter the upper limit');

if (upperLimit === '') {
  upperLimit = 20;
}

// getting a upper limit from user
let remainingAttempts = 10;
let highScore = 0;
let randomNumber = Math.trunc(Math.random() * upperLimit) + 1;
const limitText = document.querySelector('.between');
const userEnteredNumber = document.querySelector('.guess');
const checkButton = document.querySelector('.check');
const message = document.querySelector('.message');
const body = document.querySelector('body');
const hiddenNumber = document.querySelector('.number');
const remainingAttemptsElement = document.querySelector('.score');
const tryAgainBtn = document.querySelector('.again');
const highScoreLabel = document.querySelector('.highscore');

limitText.textContent = `<Between 1 and ${upperLimit}>`;

// generating a random number between 1 to upperlimit

// it will generate a random number between 0 to 1
// we want a random number should be in between 1 to 10

// const floatNumber = Math.random() * upperLimit;
// console.log(floatNumber);

// console.log(Math.trunc(floatNumber) + 1);

// Math.random() => random number between 0 to 1
// Math.random() * upperLimit => random number between 0 to (upperlimit-1)
// Math.trunc(Math.random() * upperLimit) + 1  => random number between 1 to upperlimit

// console.log(remainingAttemptsElement);
// Event Listener

// Game logic and functionality
checkButton.addEventListener('click', function () {
  let value = userEnteredNumber.value; //currenlty datatype is string 10
  // '788' = 788 => this two are not equal
  value = Number(value);
  if (value === randomNumber && remainingAttempts > 1) {
    remainingAttempts = remainingAttempts - 1;
    message.textContent = 'You Won!!!';
    body.style.backgroundColor = '#60b347';
    if (remainingAttempts > highScore) {
      highScore = remainingAttempts;
      highScoreLabel.textContent = highScore;
    }
  } else if (value > randomNumber && remainingAttempts > 1) {
    message.textContent = 'Entered value is greater';
    remainingAttempts = remainingAttempts - 1;
    remainingAttemptsElement.textContent = remainingAttempts;
  } else if (value < randomNumber && remainingAttempts > 1) {
    message.textContent = 'Entered value is lesser';
    remainingAttempts = remainingAttempts - 1;
    remainingAttemptsElement.textContent = remainingAttempts;
  } else {
    message.textContent = 'You Lost The Game';
    body.style.backgroundColor = 'red';
    remainingAttemptsElement.textContent = 0;
  }
});

// Trying game again

// making the random number visible when question mark is clicked

tryAgainBtn.addEventListener('click', function () {
  randomNumber = Math.trunc(Math.random() * upperLimit) + 1;
  hiddenNumber.textContent = '?';
  body.style.backgroundColor = ' #263238';
  message.textContent = 'Start guessing...';
  remainingAttempts = 10;
  remainingAttemptsElement.textContent = remainingAttempts;
});

hiddenNumber.addEventListener('click', function () {
  hiddenNumber.textContent = randomNumber;
});
