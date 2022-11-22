import { toggleEditPanel } from "../utils/toggle-admin-edit-panel.js";

export const cancelUpdate = () => {
  const $cancelUpdate = document.querySelector("[data-cancel-update]");
  $cancelUpdate.addEventListener("click", () => {
    toggleEditPanel();
    const $inputsHolder = document.querySelector("[data-inputs-holder]");
    $inputsHolder.innerHTML = ""; //?will restart all inputs back to empty so when click -edit-item-btn on
    //?/-admin-edit-item.js-/ doenst show up same data of first item clicked//
  });
};
