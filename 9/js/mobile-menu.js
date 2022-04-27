let navMain = document.querySelector('.main-nav');
let navMainToggle = document.querySelector('.main-nav__toggle');
let navMainBurger = document.querySelector('.main-nav__toggle-burger');
let navMainMenu = document.querySelector('.main-nav__list--primary');
let navMainCart = document.querySelector('.main-nav__list--cart');

navMain.classList.add ('main-header--JS-menu');
navMainToggle.classList.add ('main-nav__toggle--JS-menu');
navMainMenu.classList.add ('main-nav__list--close');
navMainCart.classList.add ('main-nav__list--close');

navMainToggle.addEventListener('click', function() {
  if (navMainBurger.classList.contains('main-nav__toggle-burger--close')) {
    navMainBurger.classList.remove('main-nav__toggle-burger--close');
    navMainMenu.classList.add ('main-nav__list--close');
    navMainCart.classList.add ('main-nav__list--close');
  } else {
    navMainBurger.classList.add('main-nav__toggle-burger--close');
    navMainMenu.classList.remove ('main-nav__list--close');
    navMainCart.classList.remove ('main-nav__list--close');
  }
});
