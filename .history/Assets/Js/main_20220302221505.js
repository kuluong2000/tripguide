$(".tour-slick").slick({
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

$(".explore-slider").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,

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
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        swipeToSlide: true,
        // fade: true,
      },
    },
  ],
});
// $(() => {
//   var createSlick = () => {
//     let slider = $(".tour-slick");

//     slider.not(".slick-initialized").slick({
//       infinite: true,
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       arrows: true,
//       responsive: [
//         {
//           breakpoint: 767,
//           settings: "unslick",
//         },
//       ],
//     });
//   };

//   createSlick();

//   $(window).on("resize orientationchange", createSlick);
// });
// $(() => {
//   var createSlick = () => {
//     let slider = $(".explore-slider");

//     slider.not(".slick-initialized").slick({
//       infinite: true,
//       slidesToShow: 4,
//       slidesToScroll: 1,
//       arrows: true,
//       autoplay: true,
//       autoplaySpeed: 3000,

//       responsive: [
//         {
//           breakpoint: 992,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 1,
//           },
//         },
//         {
//           breakpoint: 767,
//           settings: {
//             // arrows: false,
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             variableWidth: true,
//             swipeToSlide: true,
//             // fade: true,
//           },
//         },
//       ],
//     });
//   };

//   createSlick();

//   $(window).on("resize orientationchange", createSlick);
// });
