//?BELOW NAVBAR HOVER / ANIMATIONS//
//! why animate a hover? in order to change the logo file on hover//
const $navbar = document.querySelector("[data-navbar]");
const $navbarItems = document.querySelectorAll("[data-navbar-item]");
const $headerContent = document.querySelector("[data-header-content]");
const whiteLogoSrc = "/src/assets/media/img/logo/ttm-logo-white.png";
const colorLogoSrc = "/src/assets/media/img/logo/ttm-logo-color.png";
const bgColor1 = "transparent";
const bgColor2 = "var(--style-color-white)";
const fontColor1 = "var(--style-color-white)";
const fontColor2 = "var(--style-color-green)";

const navbarHoverAnimation = (src, bgColor, textColor) => {
  $navbar.style.background = bgColor;
  $navbarItems.forEach((element) => {
    element.style.color = textColor;
  });
  $navbar.children[1].children[0].src = src;
  $navbar.style.transition = "0.5s";
};

$navbar.addEventListener("mouseover", () => {
  navbarHoverAnimation(colorLogoSrc, bgColor2, fontColor2);
});

$navbar.addEventListener("mouseout", () => {
  navbarHoverAnimation(whiteLogoSrc, bgColor1, fontColor1);
});

//?ABOVE NAVBAR HOVER ANIMATIONS//

//?BELOW NAVBAR OPEN-CLOSE ANIMATION//

const $openBtn = document.querySelector("[data-open-menu-btn]");

$openBtn.addEventListener("click", () => {
  hideNavbar();
  darkenSection();
});

export const darkenSection = () => {
  $headerContent.classList.toggle("low-brightness");
};

const hideNavbar = () => {
  $navbar.style.height = "0";
  $navbar.style.top = "-100px";
};

export const showNavbar = () => {
  $navbar.style.height = "5rem";
  $navbar.style.top = "0";
};

//?ABOVE NAVBAR OPEN-CLOSE ANIMATION//
