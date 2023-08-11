import { adminServices } from '../../login/service/admin-service.js';
import { watches_data } from '../watches-data.js';
import { footerLinkTemplate } from '../markup-templates/footer-watch-links-template.js';

const footerLinksHolder = document.querySelector(
  '[data-footer-watch-page-links]'
);

adminServices
  .watchItems()
  .then((items) => {
    items.forEach((item) => {
      footerLinksHolder.innerHTML += footerLinkTemplate(item);
      console.log(
        "The 'The Collection' links below on the footer are renders from => JSON-server-data"
      );
    });
  })
  .catch((error) => {
    Object.values(watches_data).forEach((item) => {
      footerLinksHolder.innerHTML += footerLinkTemplate(item);
    });
    console.log(
      "The 'The Collection' links below on the footer are renders from => JS-static-data | data from JSON-server got an error =>",
      error
    );
  });
