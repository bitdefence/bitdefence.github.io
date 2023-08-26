(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 45) {
    //         $('.navbar').addClass('sticky-top shadow-sm');
    //     } else {
    //         $('.navbar').removeClass('sticky-top shadow-sm');
    //     }
    // });

    $(window).scroll(function() {
		if ($(this).scrollTop() > 45){  
			$('header').addClass("sticky");
		}
		else{
			$('header').removeClass("sticky");
		}
	});
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    $(document).ready(function() {
        // Prevent text selection for elements within the carousel
        $(".carousel_container .carousel-caption").css("-webkit-touch-callout", "none");
        $(".carousel_container .carousel-caption").css("-webkit-user-select", "none");
        $(".carousel_container .carousel-caption").css("-khtml-user-select", "none");
        $(".carousel_container .carousel-caption").css("-moz-user-select", "none");
        $(".carousel_container .carousel-caption").css("-ms-user-select", "none");
        $(".carousel_container .carousel-caption").css("user-select", "none");
    });




    // $(document).ready(function() {
    //     // Enable drag sliding for the carousel
    //     $("#header-carousel").on("touchstart mousedown", function(e) {
    //         var startX = e.type === "touchstart" ? e.originalEvent.touches[0].pageX : e.pageX;
            
    //         $(this).one("touchmove mousemove", function(e) {
    //             var moveX = e.type === "touchmove" ? e.originalEvent.touches[0].pageX : e.pageX;
    //             var distanceX = moveX - startX;
                
    //             if (Math.abs(distanceX) > 50) {
    //                 $(this).carousel(distanceX > 0 ? "prev" : "next");
    //             }
                
    //             $(this).off("touchmove mousemove");
    //         });
            
    //         $(this).one("touchend mouseup", function() {
    //             $(this).off("touchmove mousemove");
    //         });
    //     });
    // });



    // $(document).ready(function() {
    //     // Prevent text selection for elements inside the carousel
    //     $('#header-carousel').on('mousedown', '.carousel-caption, .carousel-caption *', function(e) {
    //         e.preventDefault();
    //     });
    // });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 45,
        dots: false,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:4
            },
            768:{
                items:6
            },
            992:{
                items:8
            }
        }
    });
    
})(jQuery);




