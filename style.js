$(document).ready(function () {
    $('.nav-bar').on('click', function () {
        $('.space').toggleClass('hidden-space');
        $('nav').toggleClass('hidden-nav');
        $('.nav-bar').toggleClass('nav-bar-white');
        $('header').toggleClass('header-onclick');
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 80) {
            $('header').addClass('header-scroll');
            $('header h1').addClass('header-scroll-h1');
            $('header ul').addClass('header-scroll-ul');
            $('.nav-bar').addClass('header-scroll-nav');
        } else {
            $('header').removeClass('header-scroll');
            $('header h1').removeClass('header-scroll-h1');
            $('header ul').removeClass('header-scroll-ul');
            $('.nav-bar').removeClass('header-scroll-nav');
        }
    });

});