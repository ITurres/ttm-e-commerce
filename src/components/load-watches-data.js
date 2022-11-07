import { watches_data } from "./watches-data.js";

const $watchesDataHolder = document.querySelector("[data-roller]");

const watchesMarkupTemplate = (href, srcset, src, alt, title, about) => {
  return `<a href="${href}" class="roller__item">
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

watches_data.map((element) => {
  $watchesDataHolder.innerHTML += watchesMarkupTemplate(
    element.href,
    element.srcset,
    element.src,
    element.alt,
    element.title,
    element.about
  );
});
