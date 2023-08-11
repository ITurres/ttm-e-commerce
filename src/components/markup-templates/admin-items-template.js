export const adminItemsTemplate = (item) => {
  return `<div id="${item.id}" class="roller__item" data-watch-item>
    <source srcset="${item.roller_srcset}" type="image/jpg" class="roller__img" />
    <img
      src="${item.roller_src}"
      alt="${item.img_alt}"
      class="roller__img"
    />
    <div class="item__text--holder">
      <p class="item__title">${item.roller_title}</p>
      <p class="item__about">${item.roller_about}</p>
    </div>
    <div class="item-btn--holder">
      <button id="${item.id}" class="item-btn item-edit" data-edit-item-btn>
        <i class="fa-solid fa-pen"></i>
      </button>
      <button id="${item.id}" class="item-btn item-delete" data-delete-item-btn>
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  </div>`;
};
