(function ($) {
	"use strict";

	 $(window).on('load', function(){
        // Prealoder
        $("#preloader").delay(500).fadeOut();
    });
	

    // Hamburger-menu
    $('.hamburger-menu').on('click', function () {
        $('.hamburger-menu, #menu').toggleClass('current');
    });


    // Aos initialize
    AOS.init();



})(jQuery);