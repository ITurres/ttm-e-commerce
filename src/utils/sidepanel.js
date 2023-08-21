import { showNavbar } from "./navbar.js";
import { darkenSection } from "./navbar.js";

export const sidePanel = document.querySelector("[data-sidepanel]");
const sidePanel_openBtn = document.querySelector("[data-open-menu-btn]");

export const sidePanel_closeBtn = document.querySelector(
  "[data-close-sidepanel-btn]"
);

sidePanel_openBtn.addEventListener("click", () => {
  setTimeout(() => {
    showSidePanel();
  }, 250);
});

sidePanel_closeBtn.addEventListener("click", () => {
  setTimeout(() => {
    showSidePanel();
    darkenSection();
  }, 250);
  setTimeout(() => {
    showNavbar();
  }, 700);
});

export const showSidePanel = () => {
  sidePanel.classList.toggle("sidepanel--show");
};
