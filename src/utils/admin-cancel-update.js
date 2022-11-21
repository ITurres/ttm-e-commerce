import { toggleEditPanel } from "./toggle-admin-edit-panel.js";

const $cancelUpdate = document.querySelector("[data-cancel-update]");

$cancelUpdate.addEventListener("click", () => {
  toggleEditPanel();
});
