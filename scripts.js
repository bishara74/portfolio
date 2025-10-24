$(document).ready(function() {

    $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
            $('#header').addClass('scrolled');
        } else {
            $('#header').removeClass('scrolled');
        }
    });

    $('.navbar-nav>li>a').on('click', function(){
        if ($('.navbar-toggler').is(':visible')) {
            $('.navbar-collapse').collapse('hide');
        }
    });


    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('#to-top-button').fadeIn();
        } else {
            $('#to-top-button').fadeOut();
        }
    });

    $('#to-top-button').click(function() {
        $('html, body').animate({scrollTop : 0}, 800);
        return false;
    });


    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').not('[data-bs-toggle="modal"]').click(function(event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - 80
                }, 1000, function() {
                    
                });
            }
        }
    });

});

