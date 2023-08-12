import { adminServices } from '../login/service/admin-service.js';
import { togglePanelEdit } from '../utils/toggle-admin-panels.js';
import { adminEditInputTemplates } from '../components/markup-templates/admin-edit-panel-template.js';
import { createNewWatchDataObj } from '../utils/create-new-watch-data-obj.js';

const $editInputsHolder = document.querySelector('[data-edit-inputs-holder]');

export const itemToUpdate = () => {
  const $editItemBtn = document.querySelectorAll('[data-edit-item-btn]');
  $editItemBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      getItemData(btn.id); //?passes btn's id clicked for comparison against element's id - see line 22-//
      togglePanelEdit();
      updateItems();
    });
  });
};

export const getItemData = (btnId) => {
  adminServices
    .watchItems()
    .then((items) => {
      items.forEach((item) => {
        if (item.id === btnId) {
          const inputValue = [];
          Object.keys(item).map((itemKey) => {
            Object.values(item).forEach((itemVal) => {
              inputValue.push(itemVal); //?stores each individual itemVal temporarily//
            });
            injectItemsData(
              $editInputsHolder,
              item.id,
              itemKey,
              inputValue.shift()
            ); //?the itemVal temporarily stored gets use here -when shift-//
          });
        }
      });
    })
    .catch((error) =>
      console.error(`There was an error trying to fetch data ==> ${error}`)
    );
};

export const injectItemsData = (holder, itemId, itemKey, inputValue) => {
  holder.innerHTML += adminEditInputTemplates(itemId, itemKey, inputValue);
};

export const updateItems = () => {
  const $form = document.querySelector('[data-edit-item-form]');
  $form.addEventListener('submit', (event) => {
    event.preventDefault();

    const itemInputs = document.querySelectorAll('[data-admin-item-inputs]');

    const newWatchData = createNewWatchDataObj(itemInputs);

    adminServices
      .updateWatchData(newWatchData)
      .then((response) => {
        console.info('Updated', response);
      })
      .catch((error) =>
        console.error(`There was an error trying to fetch data ==> ${error}`)
      );
  });
};
