let modal = document.querySelector('.modal');
let button = document.querySelector('.button--modal');
let container = document.querySelector('.modal__container')

button.addEventListener('click', function() {
  modal.classList.add ('modal--open');
});

modal.addEventListener('click', function(stop) {
  modal.classList.remove ('modal--open');
});

container.addEventListener('click', function(stop) {
  stop.stopPropagation();
});
