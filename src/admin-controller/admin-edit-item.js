import { adminServices } from "../login/service/admin-service.js";
import { togglePanelEdit } from "../utils/toggle-admin-panels.js";
import { adminEditInputTemplates } from "../components/markup-templates/admin-edit-panel-template.js";

const $editInputsHolder = document.querySelector("[data-edit-inputs-holder]");

export const itemToUpdate = () => {
  const $editItemBtn = document.querySelectorAll("[data-edit-item-btn]");
  $editItemBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      getItemData(btn.id); //?passes btn's id clicked for comparison against element's id - see line 22-//
      togglePanelEdit();
      updateItems();
    });
  });
};

export const getItemData = (btnId) => {
  adminServices
    .watchItems()
    .then((items) => {
      items.forEach((item) => {
        if (item.id === btnId) {
          const inputValue = [];
          Object.keys(item).map((itemKey) => {
            Object.values(item).forEach((itemVal) => {
              inputValue.push(itemVal); //?stores each individual itemVal temporarily//
            });
            injectItemsData(
              $editInputsHolder,
              item.id,
              itemKey,
              inputValue.shift()
            ); //?the itemVal temporarily stored gets use here -when shift-//
          });
        }
      });
    })
    .catch((error) =>
      console.log(`There was an error trying to fetch data ==> ${error}`)
    );
};

export const injectItemsData = (holder, itemId, itemKey, inputValue) => {
  holder.innerHTML += adminEditInputTemplates(itemId, itemKey, inputValue);
};

//? all this constants are -inputs-, I need to find a way to loop throught them and retrieve each individual value,
//? to be send to the -updateWatchData- function on admin-service.js. NOTE*: forEach works, but -updateWatchData- only receives
//? first element!...maybe a loop within >??-updateWatchData-??< but where?...(TO BE REFACTORED) //
export const updateItems = () => {
  const $form = document.querySelector("[data-edit-item-form]");
  $form.addEventListener("submit", (event) => {
    event.preventDefault();
    const id = document.querySelector(".id").value;
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
      .updateWatchData(
        id,
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
      .then((response) => {
        console.log("Updated", response);
      })
      .catch((error) =>
        console.log(`There was an error trying to fetch data ==> ${error}`)
      );
  });
};
