// ===== Scroll to Fixed ====
var nav_height = $('#nav-bar nav').height();
$(window).scroll(function () {
    if ($(this).scrollTop() >= nav_height) { // If page is scrolled more than 50px
        $('#nav-bar').addClass('navbar-fixed'); // Fade in the arrow
        $('#nav-bar nav').addClass('slideInDown');

    } else {
        $('#nav-bar').removeClass('navbar-fixed'); // Fade in the arrow
        $('#nav-bar nav').removeClass('slideInDown');
    }
});
