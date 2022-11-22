const watchItems = async () => {
  const response = await fetch("http://localhost:3000/watches_data");
  return await response.json();
};

const updateWatchData = (
  id,
  page_href,
  roller_srcset,
  roller_src,
  img_alt,
  roller_title,
  roller_about,
  video_src,
  video_srcset,
  header_title,
  header_subtitle,
  about_title,
  about_text,
  watch_price,
  img_srcset,
  img_src,
  style_class,
  sidepanel_class,
  doc_title
) => {
  fetch(`http://localhost:3000/watches_data/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
      page_href,
      roller_srcset,
      roller_src,
      img_alt,
      roller_title,
      roller_about,
      video_src,
      video_srcset,
      header_title,
      header_subtitle,
      about_title,
      about_text,
      watch_price,
      img_srcset,
      img_src,
      style_class,
      sidepanel_class,
      doc_title,
    }),
  })
    .then((response) => response)
    .catch((error) => error);
};

const deleteItem = (itemId) => {
  fetch(`http://localhost:3000/watches_data/${itemId}`, {
    method: "DELETE",
  });
};

export const adminServices = {
  watchItems,
  updateWatchData,
  deleteItem,
};
