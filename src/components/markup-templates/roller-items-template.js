export const rollerItemsMarkupTemplate = (
  watchId,
  href,
  srcset,
  src,
  alt,
  title,
  about,
  classX
) => {
  return `<a href="${href}" target="_blank" id="${watchId}" class="roller__item ${classX}" data-watch-item>
      <source srcset="${srcset}" type="image/jpg" class="roller__img" />
      <img
        src="${src}"
        alt="${alt}"
        class="roller__img ${classX}"
      />
      <div class="item__text--holder ${classX}">
        <p class="item__title ${classX}">${title}</p>
        <p class="item__about ${classX}">${about}</p>
      </div>
    </a>`;
};
