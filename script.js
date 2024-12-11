$(document).ready(function () {

    $('.burger-open').click(function () {
        $('.burger-open').toggleClass('active');
        $('.menu-mobile').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.menu-mobile__link').click(() => {
        $('.menu-mobile').removeClass('active');
        $('.burger-open').removeClass('active');
        $('body').removeClass('lock');
    })

    const swiper = new Swiper('.banner', {
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 8000,
        },
        cssMode: true,
    });

    $("a[href^='#']").click(function() {
        $('html, body').animate({
            scrollTop: $("" + $(this).attr("href") + "").offset().top - 75
        }, 700);
    });
});