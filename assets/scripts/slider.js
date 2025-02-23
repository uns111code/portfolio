console.log('slider.js loaded');

const slider = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,

    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },

    navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },

            pagination: {
                      el: '.swiper-pagination',
                      clickable: true,
                      dynamicBullets: true,
                    },

    breakpoints: {
        769: {
            slidesPerView: 1,
        }
    }
});




// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });
  