export const footerLinkTemplate = (href,itemId,linkTitle) => {
  return `<li class="footer content__list--items btn">
    <a
      href="${href}"
      id="${itemId}"
      target="_blank"
      data-watch-item
      >${linkTitle}</a
    >
  </li>`;
};