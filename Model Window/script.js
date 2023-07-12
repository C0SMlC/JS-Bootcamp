'use strict';

const btn = document.querySelector('.btn');
const card = document.querySelector('.card');

btn.addEventListener('click', function () {
  card.classList.toggle('hideDisplay');
});
