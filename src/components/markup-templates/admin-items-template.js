export const adminItemsTemplate = (watchId, srcset, src, alt, title, about) => {
  return `<div id="${watchId}" class="roller__item" data-watch-item>
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
    <div class="item-btn--holder">
      <button class="item-btn item-edit" data-edit-item-btn>
        <i class="fa-solid fa-pen"></i>
      </button>
      <button class="item-btn item-delete" data-delete-item-btn>
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  </div>`;
};
