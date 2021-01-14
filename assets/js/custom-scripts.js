(function($) {
    "use strict";

    $.fn.andSelf = function() {
        return this.addBack.apply(this, arguments);
    }

    /* Loader Code Start */
    $(window).on("load", function() {
        $(".section-loader").fadeOut("slow");

        // var $container = $('.portfolioContainer');
        // $container.isotope({
        //     filter: '*',
        //     animationOptions: {
        //         queue: true
        //     }
        // });

        $('.portfolio-nav li').click(function() {
            $('.portfolio-nav .current').removeClass('current');
            $(this).addClass('current');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    queue: true
                }
            });
            return false;
        });
        $('.current_year').text(new Date().getFullYear());
        var swiper = new Swiper('.swiper-container', {
            // Disable preloading of all images
            preloadImages: false,
            // Enable lazy loading
            lazy: true,
            loop: true,
            loopedSlides: 3,
            slidesPerView: 'auto',
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
            },
            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    });
    /* Loader Code End */


    /*
    |====================
    | Mobile NAv trigger
    |=====================
    */

    var trigger = $('.navbar-toggler'),
        overlay = $('.overlay'),
        navc = $('.navbar-collapse'),
        active = false;


    $('.navbar-toggler, .navbar-nav li a, .overlay').on('click', function() {
        $('.navbar-toggler').toggleClass('active')
            //   $('#js-navbar-menu').toggleClass('active');
            //   $('.navbar-collapse').toggleClass('show');
        overlay.toggleClass('active');
        navc.toggleClass('active');
    });


    /*
    |=================
    | Onepage Nav
    |================
    */

    $('#mh-header').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
    });

    /*
    |=================
    | fancybox
    |================
    */

    $("[data-fancybox]").fancybox({});


    /*
    |===============
    | WOW ANIMATION
    |==================
    */
    var wow = new WOW({
        mobile: false // trigger animations on mobile devices (default is true)
    });
    wow.init();


    /*
    |=================
    | AOS
    |================
    */

    //AOS.init();

    /*
    | ==========================
    | NAV FIXED ON SCROLL
    | ==========================
    */
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $(".nav-scroll").addClass("nav-strict");
        } else {
            $(".nav-scroll").removeClass("nav-strict");
        }
    });


    /*
    |=================
    | Progress bar
    |================
    */
    $(".determinate").each(function() {
        var width = $(this).text();
        $(this).css("width", width)
            .empty()
            .append('<i class="fa fa-circle"></i>');
    });

    /*
    |=================
    | Portfolio mixin
    |================
    */
    $('#portfolio-item').mixItUp();

    /*
    |=================
    | Client review
    |================
    */






    // Smooth Scroll
    $(function() {
        $('a[href*=\\#]:not([href=\\#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 600);
                    return false;
                }
            }
        });
    });



    /*
    |=================
    | CONTACT FORM
    |=================
    */

    $("#contactForm").validator().on("submit", function(event) {
        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            formError();
            submitMSG(false, "Did you fill in the form properly?");
        } else {
            // everything looks good!
            event.preventDefault();
            submitForm();
        }
    });

    function submitForm() {
        var name = $("#name").val();
        var last_name = $("#L_name").val();
        var email = $("#email").val();
        var message = $("#message").val();
        var postData = {
            'first_name': name,
            'last_name': last_name,
            'emailAddress': email,
            'message': message,
        };
        $.ajax({
            type: "POST",
            url: "https://james.prod.with-datafire.io/contact",
            data: postData,
            success: function(text) {
                if (text == "success") {
                    formSuccess();
                } else {
                    formError();
                    submitMSG(false, text);
                }
            }
        });
    }

    function formSuccess() {
        $("#contactForm")[0].reset();
        submitMSG(true, "Message Sent!");
    }

    function formError() {
        $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass();
        });
    }

    function submitMSG(valid, msg) {
        var msgClasses = '';
        if (valid) {
            msgClasses = "h3 text-center fadeInUp animated text-success";
        } else {
            msgClasses = "h3 text-center shake animated text-danger";
        }
        $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
    }



}(jQuery));