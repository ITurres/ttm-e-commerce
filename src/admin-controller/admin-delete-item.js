import { adminServices } from "../login/service/admin-service.js";

adminServices
  .watchItems()
  .then(() => {
    listenDeleteBtn();
  })
  .catch((error) =>
    console.log(`There was an error trying to fetch data ${error}`)
  );

const listenDeleteBtn = () => {
  const $deleteBtn = document.querySelectorAll("[data-delete-item-btn]");
  $deleteBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      deleteItem(btn.id);
    });
  });
};

const deleteItem = (itemId) => {
  console.log("Delete item: ", itemId);
  adminServices
    .deleteItem(itemId)
    .then((response) => {
      console.log(response);
    })
    .catch((error) =>
      console.log(`There was an error trying to fetch data ${error}`)
    );
};
