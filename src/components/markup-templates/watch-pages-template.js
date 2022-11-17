export const headerMarkupTemplate = (src, srcset, title, subtitle) => {
  return `<video
  muted
  autoplay
  playsinline
  loop
  width="100%"
  class="header-content__video"
>
  <source
    src="${src}"
  />
  <source
    src="${srcset}"
  />
</video>
<h1 class="header-content__title">${title}</h1>
<p class="header-content__subtitle">${subtitle}</p>
<div class="arrow-holder">
  <i class="arrow fa-solid fa-chevron-down"></i>
</div>
</div>`;
};

export const aboutMarkupTemplate = (
  classX,
  title,
  about,
  price,
  srcset,
  src,
  alt
) => {
  return `<div class="about-watch container">
  <h2 class="about__title ${classX} watch-section-1__title">
    ${title}
  </h2>
  <p class="about__text ${classX}">
    ${about}
  </p>
  <div class="price ${classX}">
    <span class="price__tag">US$${price}</span>
  </div>
</div>
<picture class="about__sources--holder">
  <source
    srcset= "${srcset}"
    type="image/webp"
  />
  <img
    class="about__img"
    src="${src}"
    alt="${alt}"
    height="100%"
    width="100%"
  />
</picture>`;
};
