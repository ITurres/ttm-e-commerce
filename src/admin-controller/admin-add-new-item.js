import { adminServices } from "../login/service/admin-service.js";
import { injectItemsData } from "./admin-edit-item.js";
import { togglePanelAddNew } from "../utils/toggle-admin-panels.js";

const $addNewItemBtn = document.querySelector("[data-add-new-item-btn]");
const $addNewInputsHolder = document.querySelector(
  "[data-add-new-inputs-holder]"
);

$addNewItemBtn.addEventListener("click", () => {
  injectItemsKey();
  togglePanelAddNew();
});

const injectItemsKey = () => {
  adminServices.watchItems().then((item) => {
    //?item[0] cause i just need the keys from only one of the elements (since each-one has the same)//
    Object.keys(item[0]).map((itemKey) => {
      injectItemsData($addNewInputsHolder, "", itemKey, ""); //?will inject the inputs with labels and placeholders text//
    });
  });
};

const $form = document.querySelector("[data-add-new-item-form]");
$form.addEventListener("submit", (event) => {
  event.preventDefault();
  const page_href = document.querySelector(".page_href").value;
  const roller_srcset = document.querySelector(".roller_srcset").value;
  const roller_src = document.querySelector(".roller_src").value;
  const img_alt = document.querySelector(".img_alt").value;
  const roller_title = document.querySelector(".roller_title").value;
  const roller_about = document.querySelector(".roller_about").value;
  const video_src = document.querySelector(".video_src").value;
  const video_srcset = document.querySelector(".video_srcset").value;
  const header_title = document.querySelector(".header_title").value;
  const header_subtitle = document.querySelector(".header_subtitle").value;
  const about_title = document.querySelector(".about_title").value;
  const about_text = document.querySelector(".about_text").value;
  const watch_price = document.querySelector(".watch_price").value;
  const img_srcset = document.querySelector(".img_srcset").value;
  const img_src = document.querySelector(".img_src").value;
  const style_class = document.querySelector(".style_class").value;
  const sidepanel_class = document.querySelector(".sidepanel_class").value;
  const doc_title = document.querySelector(".doc_title").value;
  adminServices
    .addNewItem(
      page_href,
      roller_srcset,
      roller_src,
      img_alt,
      roller_title,
      roller_about,
      video_src,
      video_srcset,
      header_title,
      header_subtitle,
      about_title,
      about_text,
      watch_price,
      img_srcset,
      img_src,
      style_class,
      sidepanel_class,
      doc_title
    )
    .then((respuesta) => {
      console.log(respuesta);
    })
    .catch((error) =>
      console.log(`There was an error trying to fetch data ==> ${error}`)
    );
});
