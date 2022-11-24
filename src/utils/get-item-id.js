import { adminServices } from "../login/service/admin-service.js";

//!accesing to the data been fetch and callinf the function in either case (fetch succesfully or not)
//! is important, since in both cases, the -constant- $watchItems won't exist when page loads..//
adminServices
  .watchItems()
  .then((data) => {
    getItemId(); //?if data from watches-data.json is fetched succefully => setItem//
  })
  .catch((error) => {
    getItemId(); //?if NOT => also setItem//
  });

const getItemId = () => {
  const $watchItems = document.querySelectorAll("[data-watch-item]");
  $watchItems.forEach((item) => {
    item.addEventListener("click", () => {
      console.log(item.id);
      localStorage.setItem("watchId", item.id);
    });
  });
};
