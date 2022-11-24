export const socialMediaLinksTemplate = (iclass, href, title) => {
  return `<li class="footer content__list--items btn">
      <i class="fa-brands ${iclass}">
        <a target="_blank" href="${href}"
          >${title}</a
        ></i
      >
    </li>`;
};
