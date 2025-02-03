'use strict';

const btnsReset = document.getElementsByClassName('btn__modal');
const btnCancel = document.getElementById('-btn__cancel')

const modal = document.getElementById('-modal__wrap');
// Code

for (let i = 0; i < btnsReset.length; i++) {
  btnsReset[i].addEventListener('click', () => {
    modal.classList.remove('modal__wrap_hidden');
  });
}

btnCancel.addEventListener('click', () => {
  modal.classList.add('modal__wrap_hidden');
})
