import jQuery from 'jquery'

import Swiper from 'swiper/bundle'

import '~/app/js/parts/header.js'

$(".plans-swiper").each(function (index, element) {
    index++
    $(this).addClass("plans-swiper-" + index,)
    $(this).closest(".swiper-container").find(".swiper-nav--prev").addClass("swiper-nav--prev-" + index)
    $(this).closest(".swiper-container").find(".swiper-nav--next").addClass("swiper-nav--next-" + index)
    const plansSwiper = new Swiper(".plans-swiper-" + index, {

        loop: false,
        speed: 1000,
        slidesPerView: 1,
        spaceBetween: 16,
        navigation: true,
        allowTouchMove: true,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        
        navigation: {
            nextEl: ".swiper-nav--next-" + index,
            prevEl: ".swiper-nav--prev-" + index,
        },

        breakpoints: {
            // when window width is >= 576px
            576: {
                slidesPerView: 2
            },
            // when window width is >= 992px
            992: {
                slidesPerView: 3
            },
        }
    })
});