$(".tour-slick").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
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
const inputDes = document.querySelector(".banner-info__inputDes");
const dialog = document.querySelector(".banner-info__dialog");
inputDes.addEventListener("click", () => {
  dialog.classList.add("active");
});
document.addEventListener("click", (e) => {
  if (inputDes.matches(e.target)) {
    console.log("a");
  } else {
    console.log("object");
  }
});
