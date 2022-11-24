import { adminServices } from "../../login/service/admin-service.js";
import { watches_data } from "../watches-data.js";
import { rollerItemsMarkupTemplate } from "../markup-templates/roller-items-template.js";

const $sidePanelRollerHolder = document.querySelector(
  "[data-roller-sidepanel]"
);

adminServices
  .watchItems()
  .then((items) => {
    items.forEach((item) => {
      $sidePanelRollerHolder.innerHTML += rollerItemsMarkupTemplate(
        item.id,
        item.page_href,
        item.roller_srcset,
        item.roller_src,
        item.img_alt,
        item.roller_title,
        item.roller_about,
        item.sidepanel_class
      );
      console.log(
        "The Watch items you are visualizing renders from => JSON-server-data"
      );
    });
  })
  .catch((error) => {
    Object.values(watches_data).forEach((item) => {
      $sidePanelRollerHolder.innerHTML += rollerItemsMarkupTemplate(
        item.id,
        item.page_href,
        item.roller_srcset,
        item.roller_src,
        item.img_alt,
        item.roller_title,
        item.roller_about,
        item.sidepanel_class
      );
    });
    console.log(
      "The Watch items you are visualizing renders from => JS-static-data | data from JSON-server got an error =>",
      error
    );
  });
