const $watchItems = document.querySelectorAll("[data-watch-item]");

$watchItems.forEach((item) => {
  item.addEventListener("click", () => {
    localStorage.setItem("watchId", item.id);
  });
});
