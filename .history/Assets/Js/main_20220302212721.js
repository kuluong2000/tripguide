// $(".tour-slick").slick({
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   arrows: true,
//   responsive: [
//     {
//       breakpoint: 766,
//       settings: "unslick",
//     },
//   ],
// });
$(() => {
  var createSlick = () => {
    let slider = $(".tour-slick");

    slider.not(".slick-initialized").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      responsive: [
        {
          breakpoint: 767,
          settings: "unslick",
        },
      ],
    });
  };

  createSlick();

  $(window).on("resize orientationchange", createSlick);
});
// $(".explore-slider").slick({
//   infinite: true,
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   arrows: true,
//   responsive: [
//     {
//       breakpoint: 600,
//       settings: "unslick",
//     },
//     {
//       breakpoint: 992,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 1,
//       },
//     },

//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ],
// });
$(() => {
  var createSlick = () => {
    let slider = $(".explore-slider");

    slider.not(".slick-initialized").slick({
      infinite: true,
      slidesToShow: 3,
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
          breakpoint: 767,
          settings: {
            // arrows: false,

            slidesToShow: 1.1,
            // centerMode: true,
            slidesToScroll: 1,
            // variableWidth: true,
            swipeToSlide: true,
            autoplay: true,
            autoplaySpeed: 2000,
          },
        },
      ],
    });
  };

  createSlick();

  $(window).on("resize orientationchange", createSlick);
});
