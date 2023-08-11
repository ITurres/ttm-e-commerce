export const rollerItemsMarkupTemplate = (item, sidePanelClass = '') => {
  return `<a href="${item.page_href}" target="_blank" id="${item.id}"
       class="roller__item ${sidePanelClass}" data-watch-item>
        <source srcset="${item.roller_srcset}" type="image/jpg" class="roller__img" />
        <img
          src="${item.roller_src}"
          alt="${item.img_alt}"
          class="roller__img ${sidePanelClass}"
        />
        <div class="item__text--holder ${sidePanelClass}">
          <p class="item__title ${sidePanelClass}">${item.roller_title}</p>
          <p class="item__about ${sidePanelClass}">${item.roller_about}</p>
        </div>
    </a>`;
};
