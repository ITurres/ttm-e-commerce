import { adminServices } from "../../login/service/admin-service.js";
import { adminItemsTemplate } from "../markup-templates/admin-items-template.js";
import { itemToUpdate } from "../../admin-controller/admin-edit-item.js";
import {
  cancelAddNew,
  cancelUpdate,
} from "../../admin-controller/admin-cancel-operation.js";

const $itemsSection = document.querySelector("[data-grid-items-section]");

adminServices
  .watchItems()
  .then((items) =>
    items.forEach((item) => {
      $itemsSection.innerHTML += adminItemsTemplate(
        item.id,
        item.roller_srcset,
        item.roller_src,
        item.img_alt,
        item.roller_title,
        item.roller_about
      );
    })
  )
  .then(() => {
    itemToUpdate();
    cancelAddNew();
    cancelUpdate();
  });
