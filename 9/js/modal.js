let modal = document.querySelector('.modal');
let buttons = document.querySelectorAll('.button--modal');
let container = document.querySelector('.modal__container')

buttons.forEach(btn => {
  btn.addEventListener('click', function() {
    modal.classList.add ('modal--open');
  });
});

modal.addEventListener('click', function(stop) {
  modal.classList.remove ('modal--open');
});

container.addEventListener('click', function(stop) {
  stop.stopPropagation();
});
