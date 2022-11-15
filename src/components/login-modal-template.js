export const loginModalTemplate = () => {
  return `<form
    class="modal-content animate"
    action="/action_page.php"
    method="post"
  >
    <div class="logo-holder">
        <i
        class="close-modal fa-solid fa-xmark btn"
        data-toggle-modal
      >
      </i>
      <img src="src/assets/media/img/logo/ttm-short-logo-color.png" alt="logo" class="logo" />
    </div>
    <div class="container">
      <label for="uname"><b class="label-title">Username</b></label>
      <input
        type="text"
        placeholder="Enter Username"
        name="uname"
        data-username
        required
      />
      <label for="psw"><b class="label-title">Password</b></label>
      <input
        type="password"
        placeholder="Enter Password"
        name="psw"
        data-user-password
        required
      />
      <button class="submit-btn btn" type="submit" data-submit>Login</button>
    </div>
  </form>`;
};
