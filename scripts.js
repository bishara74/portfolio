$(document).ready(function() {

    $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
            $('#header').addClass('scrolled');
        } else {
            $('#header').removeClass('scrolled');
        }
    });

    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
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


    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
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
                    scrollTop: target.offset().top
                }, 1000, function() {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex','-1');
                        $target.focus();
                    };
                });
            }
        }
    });

    $('.portfolio-image-link').on('click', function(event) {
        var imgSrc = $(this).attr('href');
        $('#modalImage').attr('src', imgSrc);
    });

});
