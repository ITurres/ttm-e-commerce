export const socialMediaLinksTemplate = (link) => {
  return `<li class="footer content__list--items btn">
      <i class="fa-brands ${link.i_class}">
        <a target="_blank" href="${link.page_href}"
          >${link.title}</a
        ></i
      >
    </li>`;
};
