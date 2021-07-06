(function() {
    "use strict";

    var carousels = function() {
        $(".owl-carousel2").owlCarousel({
            loop: true,
            center: false,
            margin: 0,
            responsiveClass: true,
            nav: false,
            smartSpeed: 800,
            autoplay: false,
            autoplayTimeout: 3800,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    slideBy: 1
                },
                767: {
                    items: 2,
                    nav: false,
                    slideBy: 2
                }
            },
        });
    };

    (function($) {
        carousels();
    })(jQuery);
})();

var owl2 = $('.owl-carousel2');
owl2.owlCarousel();

$('.customNextBtn').click(function() {
    owl2.trigger('next.owl.carousel');
});

$('.customPrevBtn').click(function() {
    owl2.trigger('prev.owl.carousel');
});