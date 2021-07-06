(function() {
    "use strict";

    var carousels = function() {
        $(".owl-carousel1").owlCarousel({
            loop: true,
            center: true,
            margin: 0,
            responsiveClass: true,
            nav: false,
            smartSpeed: 800,
            autoplay: true,
            autoplayTimeout: 3500,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                },
                680: {
                    items: 2,
                    nav: false,
                },
                1000: {
                    items: 3,
                    nav: true,
                }
            },
        });
    };

    (function($) {
        carousels();
    })(jQuery);
})();