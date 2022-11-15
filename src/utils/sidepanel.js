import { showNavbar } from "./navbar.js";
import { darkenSection } from "./navbar.js";

export const $sidePanel = document.querySelector("[data-sidepanel]");
const $sidePanel_openBtn = document.querySelector("[data-open-menu-btn]");

export const $sidePanel_closebtn = document.querySelector(
  "[data-close-sidepanel-btn]"
);

$sidePanel_openBtn.addEventListener("click", () => {
  setTimeout(() => {
    showSidepanel();
  }, 250);
});

$sidePanel_closebtn.addEventListener("click", () => {
  setTimeout(() => {
    showSidepanel();
    darkenSection();
  }, 250);
  setTimeout(() => {
    showNavbar();
  }, 700);
});

export const showSidepanel = () => {
  $sidePanel.classList.toggle("sidepanel--show");
};
