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
  if (!inputDes.contains(e.target)) {
    dialog.classList.remove("active");
  }
});
// $(function () {
//   $('input[name="datefilter"]').daterangepicker({
//     autoUpdateInput: false,
//     locale: {
//       cancelLabel: "Clear",
//     },
//   });

//   $('input[name="datefilter"]').on("apply.daterangepicker", function (ev, picker) {
//     $(this).val(picker.startDate.format("MM/DD/YYYY") + " - " + picker.endDate.format("MM/DD/YYYY"));
//   });

//   $('input[name="datefilter"]').on("cancel.daterangepicker", function (ev, picker) {
//     $(this).val("");
//   });
// });
$(function () {
  $('input[name="datefilter2"]').daterangepicker({
    autoUpdateInput: false,
    locale: {
      cancelLabel: "Clear",
    },
  });

  $('input[name="datefilter2"]').on("apply.daterangepicker", function (ev, picker) {
    $(this).val(picker.startDate.format("MM/DD/YYYY") + " - " + picker.endDate.format("MM/DD/YYYY"));
  });

  $('input[name="datefilter"]').on("cancel.daterangepicker", function (ev, picker) {
    $(this).val("");
  });
});
