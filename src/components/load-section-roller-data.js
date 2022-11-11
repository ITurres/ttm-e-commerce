import { watches_data } from "./watches-data.js";
import { rollerItemsMarkupTemplate } from "./roller-items-template.js";

const $sectionRollerHolder = document.querySelector("[data-roller]");

Object.values(watches_data).forEach((element) => {
  $sectionRollerHolder.innerHTML += rollerItemsMarkupTemplate(
    element.id,
    element.page_href,
    element.roller_srcset,
    element.roller_src,
    element.img_alt,
    element.roller_title,
    element.roller_about
  );
});
