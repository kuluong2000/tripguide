$(".tour-slick").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
});
$(".explore-slider").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },

    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
