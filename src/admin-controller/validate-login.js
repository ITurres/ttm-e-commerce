import { clientServices } from "../login/service/client-service.js";

const loginForm = document.querySelector(".modal-content");
const inputUsername = document.querySelector("[data-username]");
const inputUserPassword = document.querySelector("[data-user-password]");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  dataToValidate();
});

const dataToValidate = () => {
  const inputUn = inputUsername.value;
  const inputPw = inputUserPassword.value;
  clientServices.userList().then((users) => {
    users.forEach((user) => {
      //! this statement will --prevent-- <validateLogin> to run on every -user-. And it will only send the matched one//
      if (user.username === inputUn && user.password === inputPw) {
        const username = user.username; //store only the matched value
        const userPassword = user.password; //store only the matched value
        validateLogin(inputUn, inputPw, username, userPassword);
      } else {
        styleValidation(false); //dont clear inputs
      }
    });
  });
};

const validateLogin = (inputUn, inputPw, userUn, userPw) => {
  if (inputUn === userUn && inputPw === userPw) {
    console.log("acces granted");
    window.location.href = "../admin.html";
    styleValidation(true); //clear inputs
  }
};

const styleValidation = (boolean) => {
  if (boolean) {
    inputUsername.value = "";
    inputUserPassword.value = "";
  }
  inputUsername.classList.toggle("input--invalid");
  inputUserPassword.classList.toggle("input--invalid");
};
