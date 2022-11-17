import { watches_data } from "./watches-data.js";
import { headerMarkupTemplate } from "./watch-pages-template.js";
import { aboutMarkupTemplate } from "./watch-pages-template.js";

const $headerContent = document.querySelector("[data-header-content]");
const $sectionAbout = document.body.children[2];
const watchId_data = Object.keys(watches_data);
const itemClickedID = localStorage.getItem("watchId");
const $aboutSectionContent = document.querySelector(
  "[data-about-section-content]"
);

Object.values(watches_data).forEach((element) => {
  if (itemClickedID === element.id) {
    window.top.document.title = element.doc_title;
    $sectionAbout.classList.add(`${element.style_class}`);
    $headerContent.innerHTML = headerMarkupTemplate(
      element.video_src,
      element.video_srcset,
      element.header_title,
      element.header_subtitle
    );
    $sectionAbout.innerHTML = aboutMarkupTemplate(
      element.style_class,
      element.about_title,
      element.about_text,
      element.watch_price,
      element.img_srcset,
      element.img_src,
      element.img_alt
    );
  }
});
