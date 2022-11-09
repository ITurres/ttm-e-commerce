import { watches_data } from "./watches-data.js";

const $watchesDataHolder = document.querySelector("[data-roller]");

const rollerItemsMarkupTemplate = (
  watchId,
  href,
  srcset,
  src,
  alt,
  title,
  about
) => {
  return `<a href="${href}" target="_blank" id="${watchId}" class="roller__item" data-watch-item>
    <source srcset="${srcset}" type="image/jpg" class="roller__img" />
    <img
      src="${src}"
      alt="${alt}"
      class="roller__img"
    />
    <div class="item__text--holder">
      <p class="item__title">${title}</p>
      <p class="item__about">${about}</p>
    </div>
  </a>`;
};

Object.values(watches_data).forEach((element) => {
  $watchesDataHolder.innerHTML += rollerItemsMarkupTemplate(
    element.id,
    element.page_href,
    element.roller_srcset,
    element.roller_src,
    element.img_alt,
    element.roller_title,
    element.roller_about
  );
});
