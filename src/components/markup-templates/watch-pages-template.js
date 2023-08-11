export const headerMarkupTemplate = (item) => {
  return `
    <video
    muted
    autoplay
    playsinline
    loop
    width="100%"
    class="header-content__video"
  >
    <source
      src="${item.video_src}"
    />
    <source
      src="${item.video_srcset}"
    />
  </video>
  <h1 class="header-content__title">${item.header_title}</h1>
  <p class="header-content__subtitle">${item.header_subtitle}</p>
  <div class="arrow-holder">
    <i class="arrow fa-solid fa-chevron-down"></i>
  </div>`;
};

export const aboutMarkupTemplate = (item) => {
  return `<div class="about-watch container">
  <h2 class="about__title ${item.style_class} watch-section-1__title">
    ${item.about_title}
  </h2>
  <p class="about__text ${item.style_class}">
    ${item.about_text}
  </p>
  <div class="price ${item.style_class}">
    <span class="price__tag">US$${item.watch_price}</span>
  </div>
</div>
<picture class="about__sources--holder">
  <source
    srcset= "${item.img_srcset}"
    type="image/webp"
  />
  <img
    class="about__img"
    src="${item.img_src}"
    alt="${item.img_alt}"
    height="100%"
    width="100%"
  />
</picture>`;
};
