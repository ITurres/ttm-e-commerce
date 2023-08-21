export const togglePanelEdit = () => {
  const panelEdit = document.querySelector("[data-panel-edit]");
  panelEdit.classList.toggle("modal--show");
};

export const togglePanelAddNew = () => {
  const panelAddNew = document.querySelector("[data-panel-add-new]");
  panelAddNew.classList.toggle("modal--show");
};
