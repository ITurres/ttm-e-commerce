import { adminServices } from "../../login/service/admin-service.js";
import { adminEditInputTemplates } from "../markup-templates/admin-edit-panel-template.js";

const $inputsHolder = document.querySelector("[data-inputs-holder]");

adminServices.watchItems().then((items) => {
  //?[0] cause i just need the keys from only one of the elements (since each-one has the same)//
  Object.keys(items[0]).map((itemKey) => {
    $inputsHolder.innerHTML += adminEditInputTemplates(itemKey);
  });
});
