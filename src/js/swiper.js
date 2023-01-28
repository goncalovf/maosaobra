import Swiper, { Autoplay, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

const portfolioCarrosel = new Swiper('.services-swiper', {
  modules: [Autoplay, Pagination],
  pagination: {
    clickable: true,
    bulletClass: 'swiper-pagination-dot',
    bulletActiveClass: 'swiper-pagination-dot-active',
    el: '.swiper-pagination',
    renderBullet: function (index, className) {
      return `<span class="${className}"></span>`;
    },
  },
  speed: 400,
  autoplay: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 24
    }
  }
});
