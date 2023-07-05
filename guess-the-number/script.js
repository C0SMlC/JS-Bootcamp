'use strict';

console.log('Hello from the console');

let score = prompt('Enter the upper limit');

if (score === '') {
  score = 20;
}

console.log('Here is the value');
console.log(score);
console.log(typeof score);
// 
// const score = 50;

const paragraphText = document.querySelector('.between');

paragraphText.style.backgroundColor = 'red';

// template literals

paragraphText.textContent = `<Between 1 and ${score} > `;

console.log(paragraphText);

// Event Listener
const heading = document.querySelector('.heading');
console.log(heading);

heading.addEventListener('click', function () {
  heading.style.color = 'red';
}
);
