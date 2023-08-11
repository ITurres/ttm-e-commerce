import { adminServices } from '../../login/service/admin-service.js';
import { watches_data } from '../watches-data.js';
import {
  headerMarkupTemplate,
  aboutMarkupTemplate,
} from '../markup-templates/watch-pages-template.js';

const headerContent = document.querySelector('[data-header-content]');
const sectionAbout = document.querySelector('[data-about-section-content]');
const itemClickedID = localStorage.getItem('watchId');

adminServices
  .watchItems()
  .then((items) => {
    items.forEach((item) => {
      if (itemClickedID === item.id) {
        window.top.document.title = item.doc_title;
        sectionAbout.classList.add(`${item.style_class}`);
        headerContent.innerHTML = headerMarkupTemplate(item);
        sectionAbout.innerHTML = aboutMarkupTemplate(item);
      }
      console.info(
        'The Watch page you are visualizing renders from => JSON-server-data'
      );
    });
  })
  .catch((error) => {
    Object.values(watches_data).forEach((item) => {
      if (itemClickedID === item.id) {
        window.top.document.title = item.doc_title;
        sectionAbout.classList.add(`${item.style_class}`);
        headerContent.innerHTML = headerMarkupTemplate(item);
        sectionAbout.innerHTML = aboutMarkupTemplate(item);
      }
    });
    console.info(
      'The Watch page you are visualizing renders from => JS-static-data | data from JSON-server got an error =>',
      error
    );
  });
