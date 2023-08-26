/**
 * WEBSITE: https://bitdefence.net
 * TWITTER: https://twitter.com/bitdefence
 * FACEBOOK: https://www.facebook.com/bitdefence
 * GITHUB: https://github.com/bitdefence/
 */














(function ($) {
  'use strict';

  /* ========================================================================= */
  /*	Page Preloader
  /* ========================================================================= */
  $(window).on('load', function () {
    $('#preloader').fadeOut('slow', function () {
      $(this).remove();
    });
  });


  // navbarDropdown
	if ($(window).width() < 992) {
		$('#navigation .dropdown-toggle').on('click', function () {
			$(this).siblings('.dropdown-menu').animate({
				height: 'toggle'
			}, 300);
		});
  }

  //Hero Slider
  $('.hero-slider').slick({
    autoplay: true,
    infinite: true,
    arrows: true,
    prevArrow: '<button type=\'button\' class=\'prevArrow\'></button>',
    nextArrow: '<button type=\'button\' class=\'nextArrow\'></button>',
    dots: false,
    autoplaySpeed: 7000,
    pauseOnFocus: false,
    pauseOnHover: false
  });
  $('.hero-slider').slickAnimation();

  /* ========================================================================= */
  /*	Portfolio Filtering Hook
  /* =========================================================================  */
  // filter
  // setTimeout(function(){
  //   var containerEl = document.querySelector('.filtr-container');
  //   var filterizd;
  //   if (containerEl) {
  //     filterizd = $('.filtr-container').filterizr({});
  //   }
  // }, 500);

  /* ========================================================================= */
  /*	Testimonial Carousel
  /* =========================================================================  */
  //Init the slider
  // $('.testimonial-slider').slick({
  //   infinite: true,
  //   arrows: false,
  //   autoplay: true,
  //   autoplaySpeed: 2000
  // });


  /* ========================================================================= */
  /*	Clients Slider Carousel
  /* =========================================================================  */
  //Init the slider
  // $('.clients-logo-slider').slick({
  //   infinite: true,
  //   arrows: false,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   slidesToShow: 5,
  //   slidesToScroll: ,
  //   responsive: [{
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 4,
  //       slidesToScroll: 1,
  //       infinite: true,
  //       dots: false
  //     }
  //   },
  //   {
  //     breakpoint: 480,
  //     settings: {
  //       slidesToShow: 3,
  //       slidesToScroll: 1,
  //       arrows: false
  //     }
  //   }
  //   ]
  // });

  /* ========================================================================= */
  /*	Company Slider Carousel
  /* =========================================================================  */
  $('.company-gallery').slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 667,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false
      }
    }
    ]
  });

  /* ========================================================================= */
  /*	On scroll fade/bounce effect
  /* ========================================================================= */
  var scroll = new SmoothScroll('a[href*="#"]');

  // -----------------------------
  //  Count Up
  // -----------------------------
  function counter() {
    var oTop;
    if ($('.counter').length !== 0) {
      oTop = $('.counter').offset().top - window.innerHeight;
    }
    if ($(window).scrollTop() > oTop) {
      $('.counter').each(function () {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        }, {
          duration: 1000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          }
        });
      });
    }
  }
  // -----------------------------
  //  On Scroll
  // -----------------------------
  $(window).scroll(function () {
    counter();

    var scroll = $(window).scrollTop();
    if (scroll > 50) {
      $('.navigation').addClass('sticky-header');
    } else {
      $('.navigation').removeClass('sticky-header');
    }
  });

})(jQuery);























// JavaScript to disable user selection on the entire page
// document.addEventListener('selectstart', function(event) {
//   event.preventDefault();
// });





// document.addEventListener('keydown', function(event) {
//   if (event.ctrlKey && event.keyCode === 83) { // Ctrl+S (keyCode 17 for Ctrl, 83 for S)
//     event.preventDefault();
//   }
// });

// // JavaScript to disable Ctrl+S in the HTML page
// document.addEventListener('keydown', function(event) {
//   // Check if the Ctrl key (or Command key on Mac) and the "S" key are pressed
//   if ((event.ctrlKey || event.metaKey) && event.key === 's') {
//     event.preventDefault(); // Prevent the default behavior (saving the page)
//     console.log("Ctrl+S is disabled.");
//   }
// });


//  // JavaScript to disable Ctrl+Shift+ in the HTML page
//  document.addEventListener('keydown', function(event) {
//   // Check if the Ctrl key (or Command key on Mac) and the Shift key are pressed
//   if ((event.ctrlKey || event.metaKey) && event.shiftKey) {
//     event.preventDefault(); // Prevent the default behavior
//     console.log("Ctrl+Shift+ is disabled.");
//   }
// });


// // JavaScript to disable Ctrl+Shift+ shortcuts in the HTML page
// document.addEventListener('keydown', function(event) {
//   // Check if the Ctrl key (or Command key on Mac) and the Shift key are pressed,
//   // and any other key is also pressed (except for Ctrl, Shift, and Alt)
//   if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key.length === 1) {
//     event.preventDefault(); // Prevent the default behavior
//     console.log("Ctrl+Shift+ shortcut is disabled.");
//   }
// });


// // JavaScript to disable Ctrl+P in the HTML page
// document.addEventListener('keydown', function(event) {
//   // Check if the Ctrl key (or Command key on Mac) and the "P" key are pressed
//   if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
//     event.preventDefault(); // Prevent the default behavior (printing the page)
//     console.log("Ctrl+P is disabled.");
//   }
// });



//  // JavaScript to disable Ctrl+ in the HTML page
//  document.addEventListener('keydown', function(event) {
//   // Check if the Ctrl key (or Command key on Mac) is pressed
//   if (event.ctrlKey || event.metaKey) {
//     event.preventDefault(); // Prevent the default behavior
//     console.log("Ctrl+ is disabled.");
//   }
// });

