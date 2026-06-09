$(function(){


    $(".depth2").hide();

    $(".gnb > li").mouseenter(function(){
        $(this).children(".depth2").stop().fadeIn(200);
    });

    $(".gnb > li").mouseleave(function(){
        $(this).children(".depth2").stop().fadeOut(200);
    });





    const reviewSwiper = new Swiper(".reviewSwiper", {



    loop: true,
    centeredSlides: false,

    slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
    spaceBetween: 0,  // 슬라이드 사이의 여백 (px)

    speed: 800,

    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }


    });



});