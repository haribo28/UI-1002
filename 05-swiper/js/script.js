const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal", // vertical
    loop: true, // false로 하면 마지막에서 첫번째 페이지로 넘어가지 않음
    autoplay: true, // 자동으로 넘어가기
    speed: 1000, // 넘어가는 속도, 기본값은 3000 (0.3초)
    effect: "slide", // slide, fade, cube, flip, coverflow

    // 캐러셀 만들기
    slidesPerView: 1, // 보여질 슬라이드 갯수
    spaceBetween: 20, // 간격
    centeredSlides: true, // 첫번째 슬라이드를 가운데로

    // 반응형 : min-width
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 5,
        },
    },

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});
