"use strict";

// ===== Scroll to Fixed ====
var nav_height = $('#nav-bar nav').height();
$(window).scroll(function () {
  if ($(this).scrollTop() >= nav_height) {
    // If page is scrolled more than 50px
    $('#nav-bar').addClass('navbar-fixed'); // Fade in the arrow

    $('#nav-bar nav').addClass('slideInDown');
  } else {
    $('#nav-bar').removeClass('navbar-fixed'); // Fade in the arrow

    $('#nav-bar nav').removeClass('slideInDown');
  }
}); // ===== Preloader ====

$('#preloader').delay(3000).fadeOut(); // ===== Scroll to specific offset ==== 

$(window).scroll(function () {
  if ($(this).scrollTop() >= 50) {
    // If page is scrolled more than 50px
    $('.pagetop').fadeIn(200); // Fade in the arrow
  } else {
    $('.pagetop').fadeOut(200); // Else fade out the arrow
  }
});
//# sourceMappingURL=components.dev.js.map
