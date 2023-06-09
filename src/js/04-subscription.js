import BSN from 'bootstrap.native';

const PROMPT_DELAY = 2000;
const MAX_PROMPT_ATTEMPTS = 3;
let promptCounter = 0;
let hasSubscribed = false;
const modal = new BSN.Modal('#subscription-modal');

const refs = {
  modal: document.querySelector('#subscription-modal'),
  subscribeBtn: document.querySelector('.btn-primary'),
};

openModal();

refs.modal.addEventListener('hide.bs.modal', openModal);

refs.subscribeBtn.addEventListener('click', onSubscribeBtnClick);

function openModal() {
  if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
    return;
  }

  setTimeout(() => {
    console.log('open modal window');
    modal.show();
    promptCounter += 1;
  }, PROMPT_DELAY);
}

function onSubscribeBtnClick() {
  hasSubscribed = true;
  modal.hide();
}
