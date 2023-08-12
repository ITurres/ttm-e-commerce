import { adminServices } from '../login/service/admin-service.js';
import { injectItemsData } from './admin-edit-item.js';
import { togglePanelAddNew } from '../utils/toggle-admin-panels.js';
import { createNewWatchDataObj } from '../utils/create-new-watch-data-obj.js';

const addNewItemBtn = document.querySelector('[data-add-new-item-btn]');
const addNewInputsHolder = document.querySelector(
  '[data-add-new-inputs-holder]'
);

addNewItemBtn.addEventListener('click', () => {
  injectItemsKey();
  togglePanelAddNew();
});

const injectItemsKey = () => {
  adminServices.watchItems().then((item) => {
    //?item[0] cause i just need the keys from only one of the elements (since each-one has the same)//
    Object.keys(item[0]).map((itemKey) => {
      injectItemsData(addNewInputsHolder, '', itemKey, ''); //?will inject the inputs with labels and placeholders text//
    });
  });
};

const $form = document.querySelector('[data-add-new-item-form]');
$form.addEventListener('submit', (event) => {
  event.preventDefault();
  const itemInputs = document.querySelectorAll('[data-admin-item-inputs]');

  const newWatchData = createNewWatchDataObj(itemInputs);

  adminServices
    .addNewItem(newWatchData)
    .then((respuesta) => {
      console.info(respuesta);
    })
    .catch((error) =>
      console.error(`There was an error trying to fetch data ==> ${error}`)
    );
});
