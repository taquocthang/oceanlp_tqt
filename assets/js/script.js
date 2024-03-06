/***************************************************************************
 *
 * SCRIPT JS
 *
 ***************************************************************************/
$(document).ready(function () {
    new WOW().init();

    $(window).on('load', function () {
        setTimeout(function () {
            $(".wrapLoading").addClass('hidden');
        }, 4000);
        setTimeout(function () {
            $(".wrapContent").fadeIn(400, function () { });
        }, 6000);
    });

    if ($(window).width() <= 768) {
        $('body').addClass(getMobileOperatingSystem());
    }
    //Click event to scroll to top
    $('.scrollToTop').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });


    //SCROLL TO TOP 
    $(window).scroll(function () {
        if ($(this).scrollTop() > 80) {
            $('.scrollToTop').fadeIn(400);
        } else {
            $('.scrollToTop').fadeOut(400);
        }
    });

    // HAMBEGER BUTTON MENU SP CLICK
    $('.hamburger').click(function () {
        if ($(this).hasClass("open")) {
            $(this).removeClass('open');
            $(this).addClass('close');
        } else {
            $(this).removeClass('close');
            $(this).addClass('open');
        }

        if ($(window).width() <= 768) {
            $('#header .mainMenu').stop().slideToggle();
            // $('body').toggleClass('fixed');
        } else {

        }
    });

    $('.mainMenu .menu li a').on('click', function () {
        if ($(window).width() <= 768) {
            $(".mainMenu").hide();
            $(".hamburger").removeClass('open');
        } else {

        }

    });

    $(window).scroll(function () {
        var $anchorMain = $('#main').height();
        if ($(this).scrollTop() > $anchorMain) {
            console.log("sss");
            $("#header").addClass("fixIntro");
        } else {
            $("#header").removeClass("fixIntro");
        }
    });

    // SLIDE
    $('.slickMovies').slick({
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('.slickMovies').each(function (index) {
        // LOAD SLIDER
        let $that = $(this);
        let $slickBox = $(this).closest('.contentMoviesRight');
        let thisSlick = $(this).slick('getSlick');
        $slickBox.find('.p-num .numberActive').text(thisSlick.currentSlide + 1);
        $slickBox.find('.p-num .numberLast').text(thisSlick.slideCount);
        // SHOW NUMBER
        $(this).on('afterChange', function (event, slick, currentSlide, nextSlide) {
            $slickBox.find('.p-num .numberActive').text(currentSlide + 1);
            $slickBox.find('.p-num .numberLast').text(slick.slideCount);
        });
    });

    // SCROLL ANCHOR
    $('.anchor a[href*="#"]:not([href="#"])').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                var target_offset = 0;
                if (target.attr('data-offset')) {
                    target_offset = target.attr('data-offset');
                    target_offset = parseInt(target_offset);
                }
                $('html,body').animate({
                    scrollTop: target.offset().top - 40 + target_offset
                }, 1000);
                return false;
            }
        }
    });

    // CTA FIXED
    function ctaFixedAction() {
        let win_w = $(window).outerWidth();
        let win_h = $(window).height();
        let scrollTop = $(window).scrollTop();
        let $btnCta = $('.buttonMain');
        let cta_h = $btnCta.height();
        if (win_w > 768) {
            let mainHeight = $('#main .mainPhoto').height();
            let ctaTop = win_h - (win_h * 25.4 / 100) - (cta_h * 17.7 / 100);
            if (scrollTop + ctaTop < mainHeight) {
                $btnCta.addClass('buttonAbsolute');
            } else {
                $btnCta.removeClass('buttonAbsolute');
            }
        } else {
            let foot_top = $('#footer').offset().top;
            let ctaBot = 31;
            if (scrollTop + win_h > foot_top + ctaBot) {
                $btnCta.addClass('buttonAbsolute');
            } else {
                $btnCta.removeClass('buttonAbsolute');
            }
        }
    }
    ctaFixedAction();
    $(window).scroll(function () {
        ctaFixedAction();
    });

});

// DETECH ANDROID OR IOS
getMobileOperatingSystem();

function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(userAgent)) {
        return "Android";
    }
    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }
    return "unknown";
}