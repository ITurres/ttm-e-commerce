const userList = async () => {
  const response = await fetch("http://localhost:3000/users");
  return await response.json();
};

// userList().then((data) => {
//   console.log(data);
//   data.forEach((user) => {
//     console.log(user);
//   });
// });

const loginForm = document.querySelector(".modal-content");

// const submit = document.querySelector("[data-submit]");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  dataToValidate();
});

const inputUsername = document.querySelector("[data-username]");
const inputUserPassword = document.querySelector("[data-user-password]");

const dataToValidate = () => {
  const inputUn = inputUsername.value;
  const inputPw = inputUserPassword.value;
  userList().then((users) => {
    users.forEach((user) => {
      if (inputUn === user.username && inputPw === user.password) {
        validateLogin(inputUn, inputPw, user.username, user.password);
      } else {
        console.log("acces denied");

        inputUsername.classList.toggle("input--invalid");
        inputUserPassword.classList.toggle("input--invalid");
      }
    });
  });
};

const validateLogin = (inputUn, inputPw, userUn, userPw) => {
  if (inputUn === userUn && inputPw === userPw) {
    console.log("acces granted");
    //!HERE GOES HREF FOR ADMINISTRATOR PAGE (TO BE SET)//
    inputUsername.value = "";
    inputUserPassword.value = "";
    inputUsername.classList.toggle("input--invalid");
    inputUserPassword.classList.toggle("input--invalid");
  }
};
