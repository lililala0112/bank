// ===== Scroll to specific offset ==== 
$(window).scroll(function () {
    if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
        $('.pagetop').fadeIn(200); // Fade in the arrow
    } else {
        $('.pagetop').fadeOut(200); // Else fade out the arrow
    }
});
