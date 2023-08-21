const searchPanel = document.querySelector("[data-search-panel]");
const openSearchPanelBtn = document.querySelector("[data-open-search-panel]");
const closeSearchPanelBtn = document.querySelector(
  "[data-close-search-panel]"
);

openSearchPanelBtn.addEventListener("click", () => toggleSearchPanel());
closeSearchPanelBtn.addEventListener("click", () => toggleSearchPanel());

const toggleSearchPanel = () => {
  searchPanel.classList.toggle("search-panel--show");
  searchPanel.style.transition = "800ms";
};
