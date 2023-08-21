import { adminServices } from "../login/service/admin-service.js";

//!Invoke 'getItemId' in either case (fetch successfully or not)
//! is important, since in both cases, the -constant- $watchItems won't exist when page loads for later use
adminServices
  .watchItems()
  .then((data) => {
    getItemId(); //? data loaded from json
  })
  .catch((error) => {
    getItemId(); //? data loaded from watches-data.js
  });

const getItemId = () => {
  const $watchItems = document.querySelectorAll("[data-watch-item]");
  $watchItems.forEach((item) => {
    item.addEventListener("click", () => {
      localStorage.setItem("watchId", item.id);
    });
  });
};
