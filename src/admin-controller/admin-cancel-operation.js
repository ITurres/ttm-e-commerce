import {
  togglePanelAddNew,
  togglePanelEdit,
} from "../utils/toggle-admin-panels.js";

export const cancelAddNew = () => {
  const $cancelAddNew = document.querySelector("[data-add-new-cancel-btn]");
  $cancelAddNew.addEventListener("click", () => {
    togglePanelAddNew();
    const $addNewInputsHolder = document.querySelector(
      "[data-add-new-inputs-holder]"
    );
    $addNewInputsHolder.innerHTML = ""; //?will restart all inputs back to empty so when click -edit-item-btn on
    //?/-admin-edit-item.js-/ doenst show up same data of first item clicked//
  });
};

export const cancelUpdate = () => {
  const $cancelUpdate = document.querySelector("[data-cancel-update-btn]");
  $cancelUpdate.addEventListener("click", () => {
    togglePanelEdit();
    const $editInputsHolder = document.querySelector(
      "[data-edit-inputs-holder]"
    );
    $editInputsHolder.innerHTML = ""; //?will restart all inputs back to empty so when click -edit-item-btn on
    //?/-admin-edit-item.js-/ doenst show up same data of first item clicked//
  });
};
