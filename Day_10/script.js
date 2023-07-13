'use strict';

// One way to do the work
// const btn = document.querySelector('.btn');
// const card = document.querySelector('.card');
// let isVisible = true;

// btn.addEventListener('click', function () {
//   if (isVisible) {
//     card.style.opacity = 0;
//     card.style.visibility = 0;
//     card.style.display = 'none';
//     isVisible = false;
//   } else {
//     card.style.opacity = 1;
//     card.style.visibility = 100;
//     card.style.display = 'block';
//     isVisible = true;
//   }
// });

// another way to do the work
const btn = document.querySelector('.btn');
const card = document.querySelector('.card');

btn.addEventListener('click', function () {
  //   card.classList.add('className')
  //   card.classList.remove('className')
  //   card.classList.contains('className') 
  card.classList.toggle('hideDisplay');
});

