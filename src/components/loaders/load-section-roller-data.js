import { watches_data } from '../watches-data.js';
import { rollerItemsMarkupTemplate } from '../markup-templates/roller-items-template.js';
import { adminServices } from '../../login/service/admin-service.js';

const sectionRollerHolder = document.querySelector('[data-roller]');

adminServices
  .watchItems()
  .then((items) => {
    items.forEach((item) => {
      sectionRollerHolder.innerHTML += rollerItemsMarkupTemplate(item);
      console.info(
        'The Watch items you are visualizing renders from => JSON-server-data'
      );
    });
  })
  .catch((error) => {
    Object.values(watches_data).forEach((item) => {
      sectionRollerHolder.innerHTML += rollerItemsMarkupTemplate(item);
    });
    console.info(
      'The Watch items you are visualizing renders from => JS-static-data | data from JSON-server got an error =>',
      error
    );
  });
