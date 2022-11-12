//!DISABLED DUE TO CSS ROLLER ONLY - CHECK section-roller.css/section-roller-breakpoints.css//

// const $itemRollerContainer = document.querySelector("[data-roller]");

// $itemRollerContainer.scrollTop = 100;
// $itemRollerContainer.scrollLeft = 150;

// let positions = { top: 0, left: 0, x: 0, y: 0 };

// const mouseDownHandler = (event) => {
//   //? Change the cursor and prevent user from selecting the text
//   $itemRollerContainer.style.cursor = "grabbing";
//   $itemRollerContainer.style.userSelect = "none";
//   positions = {
//     //?The current scroll
//     left: $itemRollerContainer.scrollLeft,
//     top: $itemRollerContainer.scrollTop,
//     //?Get the current mouse position
//     x: event.clientX,
//     y: event.clientY,
//   };
//   document.addEventListener("mousemove", mouseMoveHandler);
//   document.addEventListener("mouseup", mouseUpHandler);
// };

// const mouseMoveHandler = (event) => {
//   //? How far the mouse has been moved
//   const dx = event.clientX - positions.x;
//   const dy = event.clientY - positions.y;
//   //? Scroll the element
//   $itemRollerContainer.scrollTop = positions.top - dy;
//   $itemRollerContainer.scrollLeft = positions.left - dx;
// };

// const mouseUpHandler = () => {
//   document.addEventListener("mousemove", mouseMoveHandler);
//   document.addEventListener("mouseup", mouseUpHandler);
//   $itemRollerContainer.style.cursor = "grab";
//   $itemRollerContainer.style.removeProperty("user-select");
// };
