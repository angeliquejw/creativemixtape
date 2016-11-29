var resizeTimer;
mobileMenu();
updateLayout();
scrollTo();
mapScrollToggle();
slickSlider();
modals();

$(window).on('resize', function(e) {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
      updateLayout();            
  }, 250);

});


function mobileMenu() {
    var mobileMenu = $('#js-mobile-menu');
    var navMenu = $('#js-navigation-menu');
    var navMenuItem = $('#js-navigation-menu a');
    var menuToggle = mobileMenu.unbind();

    menuToggle.on('click', function (e) {
        e.preventDefault();
        navMenu.slideToggle(function () {
            if (navMenu.is(':hidden')) {
                navMenu.removeAttr('style');
            }
        });
    });

    navMenuItem.on('click', function () {
        if (mobileMenu.is(':visible')) {
            navMenu.slideToggle(function () {
                if (navMenu.is(':hidden')) {
                    navMenu.removeAttr('style');
                }
            });
        }
    });
}

function updateLayout(){
    var displayWidth =  $(window).width();
    var sponsorCTA = $('#js-sponsorship-footer');

    if (displayWidth < 630) {
        sponsorCTA.insertAfter('#js-small-target').addClass('js-bind');
    } else {
      if (sponsorCTA.hasClass('js-bind')) {
          sponsorCTA.insertAfter('#js-large-target').removeClass('js-bind');
      }  
    }
}

function scrollTo() {
    // Generic selector to be used anywhere
    $('.js-scroll-to').click(function (e) {

        // Get the href dynamically
        var destination = $(this).attr('href');

        // Set defaults
        var thespeed = 1000;
        var offset = $(destination).offset().top - 65;

        // Prevent href=“#” link from changing the URL hash (optional)
        //		e.preventDefault();

        // Animate scroll to destination
        $('html, body').animate({
            scrollTop: offset
        }, thespeed, 'swing');
    });
}

function mapScrollToggle() {
    $('#js-map-container')
        .click(function () {
            $(this).find('iframe').addClass('is-clicked');
        })
        .mouseleave(function () {
            $(this).find('iframe').removeClass('is-clicked');
        });
}

function slickSlider() {
    $('.sliderWrapper').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 599,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 899,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }
        ]
    });
}

function modals() {
    $("#credits").on("change", function () {
        if ($(this).is(":checked")) {
            $("body").addClass("modal-is-open");
        } else {
            $("body").removeClass("modal-is-open");
        }
    });
    $("#coc").on("change", function () {
        if ($(this).is(":checked")) {
            $("body").addClass("modal-is-open");
        } else {
            $("body").removeClass("modal-is-open");
        }
    });
    $(".modalMask, .modalClose").on("click", function () {
        $(".js-modal-state:checked").prop("checked", false).change();
    });

    $(".modalInner").on("click", function (e) {
        e.stopPropagation();
    });
}