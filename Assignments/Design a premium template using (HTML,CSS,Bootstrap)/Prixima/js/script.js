// for hero-slider
$(document).ready(function () {
    //Owl hero slider
    $('#hero-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        nav: true,
        dots: false,
        navText: ['PREV', 'NEXT'],
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                nav: false,
            },
            768: {
                nav: true,
            }
        }
    })
});

// for projects-slider
$('#projects-slider').owlCarousel({
    loop: true,
    nav: false,
    items: 2,
    dots: true,
    smartSpeed: 600,
    center: true,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2,
            margin: 8,
        }
    }
})
$('.reviews-slider').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    smartSpeed: 900,
    items: 1,
    margin: 24,
    autoplay: true,
    autoplayTimeout: 4000,
});

// for scroll top
$(".scrollup").click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
});