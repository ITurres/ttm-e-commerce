const $sidepanelRoller = document.querySelector("[data-roller-sidepanel]");

window.addEventListener("load", () => {
  new Glider($sidepanelRoller, {
    slidesToScroll: 1,
    slidesToShow: 2.5,
    draggable: true,
    dragVelocity: 100,
    duration: 0,
    dots: ".sidepanel-roller__dots",
    arrows: {
      prev: "[data-sidepanel-roller-btn-previous]",
      next: "[data-sidepanel-roller-btn-next]",
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
