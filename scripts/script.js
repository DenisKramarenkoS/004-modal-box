'use strict';

const btnsReset = document.getElementsByClassName('btn__modal');
const btnCancel = document.getElementById('-btn__cancel')

const modal = document.getElementById('-modal__wrap');
const wrapBtns = document.getElementById('-btn__wrap');

btnCancel.addEventListener('click', () => {
  modal.classList.add('modal__wrap_hidden');
})

wrapBtns.addEventListener('click', (event) => {
  if (event.target.tagName === "BUTTON") {
    modal.classList.remove('modal__wrap_hidden');
  }
})