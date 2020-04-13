(function ($) {
	"use strict";
    
// tooltip
    $('[data-toggle="tooltip"]').tooltip()

// data - background
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });

// Barfiller
    $('#bar1').barfiller({
        barColor: '#ee3364',
        duration: 2000,
    });
    $('#bar2').barfiller({
        barColor: '#ee3364',
        duration: 2000,
    });
    $('#bar3').barfiller({
        barColor: '#ee3364',
        duration: 2000,
    });
// End Barfiller

 // Start Counter
 $('.counter').counterUp({
    delay: 5,
    time: 3000
});
// End Counter

// Nice Select
$('.form-element select').niceSelect()
// End Nice Select

// Start Slick Nav
    $('#mobile-menu').slicknav({
        prependTo: '.show-mobile-menu',
        allowParentLinks: true
    });
// End Slick Nav

// Sticky Menu
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 300) {
        $(".header-area").removeClass("sticky");
    } else {
        $(".header-area").addClass("sticky");
    }
  });

// WOW active
  var wow = new WOW({
    boxClass:     'wow',      
    animateClass: 'animated', 
    offset:       0,         
    mobile:       true,       
    live:         true,  
});
    wow.init();
//  End Wow 

// One Page Nav
    var top_offset = $('.header-main').height() - 10;
        $('.main-menu').onePageNav({
        currentClass: 'active',
        scrollOffset: top_offset,
    });


//  Scroll Up
    $.scrollUp({
        scrollName: 'scrollUp',
        topDistance: '300',
        topSpeed: 300, 
        animation: 'fade', 
        animationInSpeed: 200, 
        animationOutSpeed: 200, 
        scrollText: '<i class="fa fa-arrow-up"></i>', 
        activeOverlay: false, 
    });
//   Scroll Up

// Start Brands Carousel
    $('.brand-carousel').owlCarousel({
        loop: true,
        dots: false,
        thumbs: false,
        nav: false,
        navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        autoplay: true,
                autoplayTimeout:3000,
            autoplayHoverPause:true,
        margin: 0,
        responsive: {
        0:{
            items:2
        },
        767:{
            items: 3
        },
        992:{
            items: 4
        },
        1200:{
            items: 5
        },
    },
    });
// End Brands Carousel //
// Start Team Member Carousel
    $('.team-carousel').owlCarousel({
        loop: true,
        dots: false,
        thumbs: false,
        nav: false,
        navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        autoplay: true,
                autoplayTimeout:3000,
            autoplayHoverPause:true,
        margin: 0,
        responsive: {
        0:{
            items:1
        },
        550:{
            items:2
        },
        767:{
            items: 3
        },
        992:{
            items: 4
        },
        1200:{
            items: 5
        },
    },
    });
// End Team Member Carousel //
// Start Testimonial Carousel
    $('.testimonial-carousel').owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        thumbs: false,
        nav: false,
        navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        autoplay: true,
                autoplayTimeout:3000,
            autoplayHoverPause:true,
        margin: 0,
    });
// End Testimonial Carousel //

// Magnific Popup
$(".video-play").magnificPopup({
    type: 'iframe',
});
//   End  Magnific Popup

// Smooth Scroll for IE/ EDGE/ SAFARI
$('a').on('click', function(event){
    if (this.hash !==''){
        event.preventDefault();

        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 800, function(){
            window.location.hash = hash;
        });
    }
});
// End Smooth Scroll for IE/ EDGE/ SAFARI


})(jQuery);
