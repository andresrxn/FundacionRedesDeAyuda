let swiperTwo = new Swiper('.swiper-container-sponsors', {
    loop: false,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    grabCursor: true,
    spaceBetween: 30,
    slidesPerView: 3,
    freeMode: false,
    effect: 'slide',
    breakpoints: {
        375: {
            spaceBetween: 20,
            slidesPerView: 4
        },
        425: {
            spaceBetween: 30,
            slidesPerView: 4

        },
        450: {
            spaceBetween: 30,
            slidesPerView: 5,

        },
        540: {
            slidesPerView: 5,
            spaceBetween: 40,
        },
        580: {
            slidesPerView: 6,
        },
        760: {
            slidesPerView: 7,
            spaceBetween: 40,
        },
        820: {
            slidesPerView: 7,
            spaceBetween: 60,
        },
        900: {
            slidesPerView: 8,
            spaceBetween: 45,
        },
        1200: {
            slidesPerView: 9,
            spaceBetween: 60,
        },
        1500: {
            slidesPerView: 10,
            spaceBetween: 60,
        },
        1500: {
            slidesPerView: 10,
            spaceBetween: 80,
        }
    }

});

let mySwiper = new Swiper('.swiper-container-news', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    initialSlide: 1,
    spaceBetween: 45,
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints: {

        540: {

            spaceBetween: 60,
        }

    },

});