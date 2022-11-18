import { adminServices } from "../login/service/admin-service.js";
import { toggleEditPanel } from "../utils/toggle-admin-edit-panel.js";
import { adminEditInputTemplates } from "../components/markup-templates/admin-edit-panel-template.js";

const $inputsHolder = document.querySelector("[data-inputs-holder]");
const $itemsInput = document.querySelectorAll("[data-item-data]");

export const editItem = () => {
  const $editItemBtn = document.querySelectorAll("[data-edit-item-btn]");
  $editItemBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      injectItemsData(btn.id);
      toggleEditPanel();
    });
  });
};

const injectItemsData = (btnId) => {
  adminServices.watchItems().then((items) => {
    let inputValue = [];
    items.forEach((item) => {
      if (item.id === btnId) {
        Object.keys(items[0]).map((itemKey) => {
          Object.values(item).forEach((itemVal) => {
            inputValue.push(itemVal);
          });
          $inputsHolder.innerHTML += adminEditInputTemplates(
            item.id,
            itemKey,
            inputValue.shift()
          );
        });
      }
    });
  });
};
