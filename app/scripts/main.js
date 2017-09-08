$(document).ready(function () {

  // iOS button fixes
  var iOS = false,
    p = navigator.platform;

  if (p === 'iPad' || p === 'iPhone' || p === 'iPod') {
    iOS = true;
  }
  if (iOS) {
    $('input.button, input[type="text"],input[type="button"],input[type="password"],textarea, input.input-text').css('-webkit-appearance', 'none');
    $('input').css('border-radius', '0');
  }

  // Site preloader
  $(window).on('load', function () {
    $('#preloader, #preloader-image').delay(500).fadeOut();
    $('.mask').delay(1000).fadeOut('slow');
  });

  /**
   *	Scroll functions
   */
  $(window).on('scroll', function () {

    var scrollonscreen = $(window).scrollTop() + $(window).height();

    // Scroll to top function
    if (scrollonscreen > $(window).height() + 350) {
      $('#top-link').css('bottom', '22px');
    } else {
      $('#top-link').css('bottom', '-60px');
    }

  });

  // Remove animations on touch devices
  function isTouchDevice() {
    return true == ('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch);
  }

  if (isTouchDevice() === true) {
    $('#animations-css').remove();
  }

  // Debug
  $('body').addClass('transparent-header');

  // Transparent header
  if ($(window).width() > 1024) {
    if ($('body.transparent-header').length > 0) {
      $('header').addClass('transparent-header');
      $('header.transparent-header').css('top', '0px');
    }
  }

  // Sticky header
  function hind_stickyHeaderWorker() {

    // Transparent Header
    if ($('body.transparent-header').length > 0) {

      var transparentscrolloffset = 60; // when we will disable transparency

      if (isTouchDevice() == false) {

        var scrolltop = $(document).scrollTop();

        if (scrolltop > transparentscrolloffset) {


          if (header_fixed == 0) {

            header_fixed = 1;

            $('header.sticky-header').addClass('fixed');
            $('header').removeClass('transparent-header');

            $('header.sticky-header .col-md-12').css('height', 50);

            $('header.sticky-header').css('top', '0px');

          }

        } else {

          if (header_fixed == 1) {

            $('header.sticky-header').removeClass('fixed');
            $('header').addClass('transparent-header');
            $('header.sticky-header .col-md-12').css('height', header_original_height);

            header_fixed = 0;

          }

        }

      }
    } else {
      // Regular header
      if (isTouchDevice() == false) {

        var scrolltop = $(document).scrollTop();

        if ((scrolltop > ($(window).height() / 2))) {

          if ((header_hided == 1) && (header_fixed = 1)) {
            header_fixed = 0;
          }

          if (header_fixed == 0) {

            header_fixed = 1;

            $('header.sticky-header').addClass('fixed');

            $('header.sticky-header .col-md-12').css('height', 50);

            $('header.sticky-header').css('top', -50);

            $('header.sticky-header').css('top', '0px');

            if ($('header.sticky-header .mainmenu-belowheader').length > 0) {

              $('body').css('padding-top', header_original_height + $('header.sticky-header .mainmenu-belowheader').height());
            } else {
              $('body').css('padding-top', header_original_height);
            }

          }

        } else {

          if (header_fixed == 1) {

            $('header.sticky-header').css('top', 0);

            header_hided = 1;

            if ((scrolltop < ($(window).height() / 2) - 100)) {

              $('header.sticky-header').removeClass('fixed');
              $('body').css('padding-top', 0);
              $('header.sticky-header .col-md-12').css('height', header_original_height);

              header_fixed = 0;
              header_hided = 0;

            }
          }

        }

      }
    }
  }

  if ($('header.sticky-header').length > 0) {
    if ($(window).width() > 1024) {

      // Transparent Header
      if ($('body.transparent-header').length > 0) {
        var header_fixed = 0;
        var header_original_height = 100; //$("header.sticky-header .col-md-12").height();
        $('header.sticky-header .col-md-12').height(100);

        var header_menu_bg_original_height = 0;

        var header_hided = 0;

        $('header.sticky-header').css('top', '0');

        // Run first time

        hind_stickyHeaderWorker();

      } else {
        // Regular header
        var header_fixed = 0;
        var header_original_height = $('header.sticky-header .col-md-12').height();
        var header_menu_bg_original_height = 0;
        var header_mainmenu_belowheader_height = 0;
        var header_hided = 0;

        if ($('header.sticky-header .mainmenu-belowheader').length > 0) {
          header_mainmenu_belowheader_height = $('header.sticky-header .mainmenu-belowheader').height();
        } else {
          header_mainmenu_belowheader_height = 0;
        }

        $('header.sticky-header').css('top', -90 - 50);

        // Run first time

        hind_stickyHeaderWorker();

      }

      // Run on scroll
      $(window).on('scroll', function () {

        hind_stickyHeaderWorker();

      });

    }

  }

  /**
   * Fullpage function
   */

  $('#fullpage').fullpage({
    //Navigation
    lockAnchors: true,
    navigation: false,
    showActiveTooltip: false,
    slidesNavigation: false,

    //Scrolling
    css3: true,
    autoScrolling: false,
    fitToSection: false,
    scrollBar: false,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: false,
    continuousVertical: false,
    continuousHorizontal: false,
    scrollHorizontally: false,
    interlockedSlides: false,
    dragAndMove: false,
    offsetSections: false,
    resetSliders: false,
    fadingEffect: false,
    scrollOverflow: false,
    scrollOverflowReset: false,
    scrollOverflowOptions: null,
    touchSensitivity: 15,
    normalScrollElementTouchThreshold: 5,
    bigSectionsDestination: null,
    //Design
    controlArrows: false,
    verticalCentered: true,
    // paddingBottom: '10px',
    responsiveWidth: 0,
    responsiveHeight: 0,
    responsiveSlides: false,
    //Custom selectors
    lazyLoading: true,
  });

  $('.user-menu').on('click', function (e) {
    e.preventDefault();
    $('.user-toggle-menu').toggleClass('hidden');
  })

  $('.project-list-item')
    .on('mouseover', function(e) {
        $(this).css({marginLeft: '-300px'})
    }).on('mouseout', function(e) {
        $(this).css({marginLeft: '0px'})
    })

});
