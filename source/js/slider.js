let slides = document.querySelectorAll('.slider__list .slider__item');
let currentSlide = 0;
let sliderToggleNext = document.querySelector('.slider__toggle--right');
let sliderTogglePrev = document.querySelector('.slider__toggle--left');

sliderToggleNext.addEventListener('click', function() {
  slides[currentSlide].classList.remove('slider__item--active');
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].classList.add('slider__item--active');
});

sliderTogglePrev.addEventListener('click', function() {
  slides[currentSlide].classList.remove('slider__item--active');
  if (currentSlide == 0) {
    currentSlide = (slides.length-1);
  } else {
    currentSlide = (currentSlide-1)%slides.length;
  }
  slides[currentSlide].classList.add('slider__item--active');
});
