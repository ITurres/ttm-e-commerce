const $editPanel = document.querySelector("[data-edit-panel]");

export const toggleEditPanel = () => {
  $editPanel.classList.toggle("modal--show");
};
