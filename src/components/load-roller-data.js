import { watches_data } from "./watches-data.js";

const $watchesDataHolder = document.querySelector("[data-roller]");

const rollerItemsMarkupTemplate = (href, srcset, src, alt, title, about) => {
  return `<a href="${href}" target="_blank" class="roller__item">
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

Object.values(watches_data).forEach((watchId) => {
  $watchesDataHolder.innerHTML += rollerItemsMarkupTemplate(
    watchId.page_href,
    watchId.roller_srcset,
    watchId.roller_src,
    watchId.img_alt,
    watchId.roller_title,
    watchId.roller_about
  );
});
