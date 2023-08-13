import { $sidePanel_closebtn } from './sidepanel.js';
import { $sidePanel } from './sidepanel.js';

const $navbar = document.querySelector('[data-navbar]');
const $navbarItems = document.querySelectorAll('[data-navbar-item]');
const $elementsToShadow = document.querySelectorAll('[data-shadow-content]');
const whiteLogoSrc = 'src/assets/media/img/logo/ttm-logo-white.png';
const colorLogoSrc = 'src/assets/media/img/logo/ttm-logo-color.png';
const bgColor1 = 'transparent';
const bgColor2 = 'var(--style-color-white)';
const fontColor1 = 'var(--style-color-white)';
const fontColor2 = 'var(--style-color-green)';

// ?BELOW---NAVBAR HOVER ANIMATIONS //

export const navbarHoverAnimation = (src, bgColor, textColor) => {
  $navbar.style.background = bgColor;
  $navbarItems.forEach((element) => {
    element.style.color = textColor;
  });
  // ?below children go like: nav => navbar__logo => anchor => img element //
  $navbar.children[1].children[0].children[0].src = src;
  $navbar.style.transition = '0.5s';
};

$navbar.addEventListener('mouseover', () => {
  navbarHoverAnimation(colorLogoSrc, bgColor2, fontColor2);
});
$navbar.addEventListener('mouseout', () => {
  navbarHoverAnimation(whiteLogoSrc, bgColor1, fontColor1);
});

// ?ABOVE---NAVBAR HOVER ANIMATIONS //

// ?BELOW NAVBAR ON-SCROLL ANIMATION //

let lastScrollTop = 0;
window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    $navbar.style.top = '-100px';
  } else {
    $navbar.style.top = '0';
    navbarHoverAnimation(colorLogoSrc, bgColor2, fontColor2);
    if ($sidePanel.classList.contains('sidepanel--show')) {
      // !without this conditional, navbar opens on up-scroll when sidepanel is open//
      // ?to hide it use property below//
      $navbar.style.top = '-100px';
    }
  }
  lastScrollTop = scrollTop;
  if (scrollTop === 0) {
    navbarHoverAnimation(whiteLogoSrc, bgColor1, fontColor1);
    showNavbar(); // !this call fixes the issue of navbar not showing up when scroll reaches top on -iOS- devices/
  }
});

// ?ABOVE NAVBAR ON-SCROLL ANIMATION //

// ?BELOW---NAVBAR OPEN-CLOSE ANIMATION //

document.querySelector('[data-open-menu-btn]').addEventListener('click', () => {
  hideNavbar();
  darkenSection();
});

$sidePanel_closebtn.addEventListener('click', () => {
  navbarHoverAnimation(colorLogoSrc, bgColor2, fontColor2);
});

export const darkenSection = () => {
  $elementsToShadow.forEach((element) =>
    element.classList.toggle('low-brightness')
  );
};

const hideNavbar = () => {
  $navbar.style.height = '0';
  $navbar.style.top = '-100px';
};

export const showNavbar = () => {
  $navbar.style.height = '5rem';
  $navbar.style.top = '0';
};

// ?ABOVE---AVBAR OPEN-CLOSE ANIMATION //
