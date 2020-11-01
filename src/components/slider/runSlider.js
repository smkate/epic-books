export default (swiperSlider) => {
    const prev = document.getElementById('popular-slider-left'),
      next = document.getElementById('popular-slider-right'),
      slides = document.querySelectorAll('.popular__slide');

let index = 1,
    currentSlideInd = document.getElementById('current-slide-index'),
    sliderBox = document.querySelector('.popular__slider-box-container'),
    width = 220, // ширина картинки
    count = 1, // видимое количество изображений
    position = 0; // положение ленты прокрутки

// 


const nextSlide = () => {
  if (index < slides.length) {
    // сдвиг вправо
    position -= width * count;
    // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
    position = Math.max(position, -width * (slides.length - count));
    sliderBox.style.marginLeft = position + 'px';
    index++;
  }
};

const prevSlide = () =>  {
  if (index > 1) {
      // сдвиг влево
      position += width * count;
      // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
      position = Math.min(position, 220)
      sliderBox.style.marginLeft = position + 'px';
      index--;
  }
};

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

};