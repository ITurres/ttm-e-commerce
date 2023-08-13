import { adminServices } from '../login/service/admin-service.js';
import { watches_data } from '../components/watches-data.js';

const searchPanel = document.querySelector('[data-search-panel]');
const itemResultTemplate = document.querySelector('[data-item-template]');
const resultsContainer = document.querySelector('[data-results-container]');
const searchInput = document.querySelector('[data-search-input]');
let itemsFound = [];

const itemsFoundData = (item) => {
  const itemResultCard = itemResultTemplate.content.cloneNode(true).children[0];
  const itemAnchor = itemResultCard.querySelector('[data-watch-item]');
  const itemImg = itemResultCard.querySelector('[data-item-img]');
  const itemTitle = itemResultCard.querySelector('[data-item-title]');
  const itemAbout = itemResultCard.querySelector('[data-item-about]');
  itemAnchor.id = item.id;
  itemImg.src = item.roller_src;
  itemTitle.textContent = item.roller_title;
  itemAbout.textContent = item.roller_about;
  resultsContainer.append(itemResultCard);
  return {
    name: item.roller_title,
    name2: item.roller_about,
    element: itemResultCard,
  };
};

searchInput.addEventListener('input', (e) => {
  const inputValue = e.target.value.toLowerCase();
  if (inputValue === '') {
    resultsContainer.style.display = 'none';
    searchPanel.style.height = 'fit-content';
  } else {
    searchPanel.style.height = '100vh';
    resultsContainer.style.display = 'grid';
    itemsFound.forEach((item) => {
      const isItThere =
        item.name.toLowerCase().includes(inputValue) ||
        item.name2.toLowerCase().includes(inputValue);
      item.element.classList.toggle('show-results', isItThere);
    });
  }
});

adminServices
  .watchItems()
  .then((items) => {
    itemsFound = items.map((item) => itemsFoundData(item));
    console.info('The Search results were render from => JSON-server-data');
  })
  .catch((error) => {
    itemsFound = Object.values(watches_data).map((item) =>
      itemsFoundData(item)
    );
    console.info(
      'The search results were render from => JS-static-data | data from JSON-server got an error =>',
      error
    );
  });
