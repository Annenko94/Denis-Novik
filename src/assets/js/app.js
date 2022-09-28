import Swiper from 'swiper/bundle';
const slider = document.querySelector('.image-slider');

let mySwiper = new Swiper(slider,{
    slidesPerView: 1.1,
    navigation: {
        nextEl: document.querySelector('.swiper-button-next'),
        prevEl: document.querySelector('.swiper-button-prev')
    },
    pagination: {
        el: document.querySelector('.swiper-pagination'),
        clickable: true,
    },
    scrollbar: {
        el: document.querySelector('swiper-scrollbar'),
        draggable: true
    },
   
});
    
(function () {
    let toggle = document.querySelector('.burger');
    
    toggle.addEventListener('click', () => {
      this.classList.toggle('burger-close');
    });
  })();
        

