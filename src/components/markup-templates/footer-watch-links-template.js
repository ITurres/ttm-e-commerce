export const footerLinkTemplate = (item) => {
  return `<li class="footer content__list--items btn">
    <a
      href="${item.page_href}"
      id="${item.id}"
      target="_blank"
      data-watch-item
      >${item.footer_link_title}</a
    >
  </li>`;
};
