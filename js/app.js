const cardBtns = document.querySelectorAll('.card-btns i');

cardBtns.forEach(btn => btn.addEventListener('click', e => {
  e.target.classList.toggle('selected');
}));