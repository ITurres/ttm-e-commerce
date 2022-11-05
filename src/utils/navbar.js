//?BELOW NAVBAR HOVER / ANIMATIONS//
//! why animate a hover? in order to change the logo file on hover//
const $navbar = document.querySelector("[data-navbar]");
const $navbarItems = document.querySelectorAll("[data-navbar-item]");
const $headerContent = document.querySelector("[data-header-content]");

const navbarHoverAnimation = (src) => {
  $navbar.classList.toggle("navbar--white"); //!do we need this?//
  $navbarItems.forEach((element) => {
    element.classList.toggle("navbar__item--green");
  });
  $navbar.children[1].children[0].src = src;
  $navbar.style.transition = "0.5s";
};

$navbar.addEventListener("mouseover", () => {
  navbarHoverAnimation("/src/assets/media/img/logo/ttm-logo-color.png");
});

$navbar.addEventListener("mouseout", () => {
  navbarHoverAnimation("/src/assets/media/img/logo/ttm-logo-white.png");
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
