'use strict';

const orderButton = document.querySelector('.banner__button');
const modalButton = document.querySelector('.modal__button');
const modal = document.querySelector('.modal');

orderButton.addEventListener('click', () => {
  modal.classList.add('modal--visible')
});

modalButton.addEventListener('click', () => {
  modal.classList.remove('modal--visible')
})
