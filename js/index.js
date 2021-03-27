$('.carousel').slick({
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 601,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },]
});
//wow.js'
var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true // default
});
wow.init();
$(document).on('click', '#hamburger', function () {
    if ($(this).hasClass('is-active')) {
        $(this).removeClass('is-active');
        $('#mobile-nav,#mask').fadeOut();
        return;
    }
    $(this).addClass('is-active');
    $('#mobile-nav,#mask').fadeIn();
});
$(document).on('click', '#mobile-nav a,#mask', function () {
    $('#hamburger').trigger('click');
});
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    var scrollOffest = '';
    if (window.matchMedia("(max-width: 1024px)").matches) {
        scrollOffest = $($.attr(this, 'href')).offset().top;
    }
    else {
        scrollOffest = $($.attr(this, 'href')).offset().top - $('nav').height();
    }
    $('html, body').animate({
        scrollTop: scrollOffest
    }, 500);
});
// ===== Scroll to Fixed ====
var nav_height = $('#nav-bar nav').height();
$(window).scroll(function () {
    if ($(this).scrollTop() >= nav_height) { // If page is scrolled more than 50px
        $('#nav-bar').addClass('navbar-fixed'); // Fade in the arrow
        $('#nav-bar nav,#hamburger').addClass('slideInDown');
    }
    else {
        $('#nav-bar').removeClass('navbar-fixed'); // Fade in the arrow
        $('#nav-bar nav,#hamburger').removeClass('slideInDown');
    }
});
// ===== Preloader ====
$('#preloader').delay(3000).fadeOut();
// ===== Scroll to specific offset ==== 
$(window).scroll(function () {
    if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
        $('.pagetop').fadeIn(200); // Fade in the arrow
    }
    else {
        $('.pagetop').fadeOut(200); // Else fade out the arrow
    }
});
// ===== snow slice ====
var tl = gsap.timeline();
var falling = true;
gsap.set("#snow_piece", { perspective: 500 });
gsap.set("img", { xPercent: "-50%", yPercent: "-50%" });
var total = 60;
var snow_piece = document.getElementById("snow_piece"), w = 1280, h = window.innerHeight;
for (i = 0; i < total; i++) {
    var Div = document.createElement('div');
    gsap.set(Div, { attr: { "class": 'snow' }, x: R(0, w), y: R(-200, -150), z: R(-200, 200) });
    snow_piece.appendChild(Div);
    animm(Div);
}
function animm(elm) {
    gsap.to(elm, R(14, 22), { y: h + 100, ease: Linear.easeNone, repeat: -1, delay: -15, backgroundColor: '#E6623B' });
    gsap.to(elm, R(4, 8), { x: '+=100', rotationZ: R(0, 180), repeat: -1, yoyo: true, ease: Sine.easeInOut, backgroundColor: '#EF8EAD' });
    gsap.to(elm, R(2, 8), { rotationX: R(0, 360), rotationY: R(0, 360), repeat: -1, yoyo: true, ease: Sine.easeInOut, delay: -5, backgroundColor: '#71a0b4' });
}
;
function R(min, max) { return min + Math.random() * (max - min); }
;
var mediaQuery = window.matchMedia('(min-width: 1025px)');
var walkingAreaHeight = window.innerHeight;
if (document.getElementById("path") !== null && mediaQuery.matches) {
    /*
    gsap.set("#walking-area",{height:walkingAreaHeight*.5});
    */
    gsap.registerPlugin(MotionPathPlugin);
    gsap.set(".doll", {
        scale: 1.6,
        xPercent: -50,
        yPercent: -50
    });
    var tl = gsap.timeline({ defaults: {
            duration: 10,
            ease: "linear"
        } });
    tl.to(".walking_doll", {
        motionPath: {
            path: "#path",
            align: "#path",
            start: .1,
            end: .8
        }
    });
    tl.to(".doll", {
        scale: 1
    }, "<");
}
var pageparam = window.location.pathname.split("/").pop();
$("nav li>a").each(function (i) {
    if ($(this).attr('href') == pageparam) {
        $(this).parent().addClass('active');
        if ($(this).parent().parent().length > 0) {
            console.log('check');
            $(this).parent().parent().css('display', 'block');
        }
    }
});
/*
if(pageparam =="step_1.html" || pageparam =="step_2.html" ){
    if(mediaQuery.matches){
        var postAreaHeight =  $(".poster_area").offset().top;
        $("#step").css({
            backgroundPositionY:0
        });
    }
}*/

//# sourceMappingURL=index.js.map
