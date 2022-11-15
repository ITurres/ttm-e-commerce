import { showSidepanel } from "./sidepanel.js";

const $loginModal = document.querySelector("[data-modal-holder]");
const $toggleLoginModal = document.querySelectorAll("[data-toggle-modal]");

$toggleLoginModal.forEach((btn) => {
  btn.addEventListener("click", () => {
    toggleModal();
    showSidepanel();
  });
});

const toggleModal = () => {
  $loginModal.classList.toggle("modal--show");
};

window.addEventListener("click", (event) => {
  if (event.target === $loginModal) {
    toggleModal();
    showSidepanel();
  }
});
