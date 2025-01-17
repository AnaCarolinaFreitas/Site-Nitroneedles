var swiper = new Swiper(".swiper", {
    loop: true,
    grabCursor: true,
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 18
          },
        375: {
            slidesPerView: 1,
            spaceBetween: 18
          },
        // when window width is >= 640px
        425: {
          slidesPerView: 1,
          spaceBetween: 18
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 1188px
        1024: {
          slidesPerView: 3,
          spaceBetween: 24
        }
      }
  });