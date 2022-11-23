import { watches_data } from "../watches-data.js";
import { rollerItemsMarkupTemplate } from "../markup-templates/roller-items-template.js";

const $sidePanelRollerHolder = document.querySelector(
  "[data-roller-sidepanel]"
);

Object.values(watches_data).forEach((element) => {
  $sidePanelRollerHolder.innerHTML += rollerItemsMarkupTemplate(
    element.id,
    element.page_href,
    element.roller_srcset,
    element.roller_src,
    element.img_alt,
    element.roller_title,
    element.roller_about,
    element.sidepanel_class
  );
});
