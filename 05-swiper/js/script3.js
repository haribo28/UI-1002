// 썸네일 슬라이더(밑에있는애)를 먼저 정의

const bottomSlider = new Swiper(".bottom-slider", {
    loop: true,
    // spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});

const topSlider = new Swiper(".top-slider", {
    loop: true,
    effect: "fade",
    autoplay: {
        delay: 5000,
    },
    // spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: bottomSlider,
    },
});
