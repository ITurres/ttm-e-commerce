const $navbar = document.querySelector("[data-navbar]");

const navbarHoverAnimation = (bgColor, textColor, src) => {
  $navbar.style.backgroundColor = bgColor;
  $navbar.classList.add("navbar-white");
  $navbar.children[0].children[0].style.color = textColor; //*open-menu_color
  $navbar.children[2].children[0].style.color = textColor; //*search-btn_color
  $navbar.children[1].children[0].src = src;
  $navbar.style.transition = "0.4s";
};

$navbar.addEventListener("mouseover", () => {
  navbarHoverAnimation(
    "var(--style-color-white)",
    "var(--style-color-green)",
    "/src/assets/media/img/logo/ttm-logo-color.png"
  );
});

$navbar.addEventListener("mouseout", () => {
  navbarHoverAnimation(
    "transparent",
    "var(--style-color-white)",
    "/src/assets/media/img/logo/ttm-logo-white.png"
  );
});
