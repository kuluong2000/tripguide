$(".tour-slick").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
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
    let slider = $("..explore-slider");

    slider.not(".slick-initialized").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  };

  createSlick();

  $(window).on("resize orientationchange", createSlick);
});
