
$('.single-banner').slick({
  dots: true,
  autoplay: true,
  dots: true,
  autoplaySpeed: 2000,
  fade: true,
  prevArrow: '<div class="slick-prev-arrow"><img src="assets/img/iconos-web/left.svg" alt=""></div>',//$('.slick-prev-arrow'),
  nextArrow: '<div class="slick-next-arrow"><img src="assets/img/iconos-web/right.svg" alt=""></div>',//$('.slick-next-arrow'),
});

$(document).ready(function () {
    $(".single-item").slick({
        autoplay: false,
        autoplaySpeed: 3000,
        speed: 500,
        infinite: true,
        cssEase: 'linear',
        fade: true,
        arrows: false,
        // revArrow: '<div class="slick-prev-arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>',
        // nextArrow: '<div class="slick-next-arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>',
        dots: true,
    });
});

$('.multiple-items').slick({
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 500,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    dots:true,
    responsive: [
        {
            breakpoint: 700,
            settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        }
    ]
});

$('.multiple-card').slick({
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 500,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    dots:true,
    responsive: [
        {
            breakpoint: 700,
            settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }
    ]
});





