'use strict';

const paragraphText = document.querySelector('.between');
let selesctedValue = prompt('Enter the upper limit') * 1;
let score = 10;
selesctedValue = selesctedValue ? selesctedValue : 20;
let highscore = 0;
let num = Math.trunc(Math.random() * selesctedValue) + 1;

paragraphText.textContent = `<Between 1 and ${selesctedValue}> `;

document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  document.querySelector('.score').textContent = score;
  num = Math.trunc(Math.random() * selesctedValue) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#263238';
});

document.querySelector('.number').addEventListener('click', function () {
  document.querySelector('.number').textContent = num;
});
// document.querySelector('.number').textContent = num;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (score > 0) {
    if (!guess) {
      document.querySelector('.message').textContent = 'No Number ⛔';
    } else if (num == guess) {
      document.querySelector('.message').textContent = 'Correct Number !';
      document.querySelector('.score').textContent = --score;
      document.querySelector('body').style.backgroundColor = 'green';
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (guess < num) {
      document.querySelector('.message').textContent = 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guess > num) {
      document.querySelector('.message').textContent = 'Too High';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent = 'You Lost The Game';
    document.querySelector('body').style.backgroundColor = 'red';
  }
});
