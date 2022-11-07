const $roller = document.querySelector("[data-roller]");

window.addEventListener("load", () => {
  new Glider($roller, {
    slidesToScroll: 1,
    slidesToShow: 1.5,
    draggable: true,
    dragVelocity: 100,
    duration: 0,
    dots: ".roller__dots",
    arrows: {
      prev: "[data-roller-btn-previous]",
      next: "[data-roller-btn-next]",
    },
    responsive: [
      {
        // screens greater than >= 600px
        breakpoint: 600,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 3,
          itemWidth: 150,
          duration: 0.25,
        },
      },
      {
        // screens greater than >= 1000px
        breakpoint: 1000,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
          itemWidth: 150,
          duration: 0.25,
        },
      },
    ],
  });
});
