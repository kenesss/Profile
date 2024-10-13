document.addEventListener("DOMContentLoaded", function () {
  let prevArrow = document.getElementById("prevArrow");
  let nextArrow = document.getElementById("nextArrow");

  $(".main_slider").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: prevArrow,
    nextArrow: nextArrow,
    speed: 1300,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
