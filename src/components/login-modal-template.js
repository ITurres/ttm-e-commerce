export const loginModalTemplate = () => {
  return `<form
    class="modal-content animate"
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
        class="user-input"
        data-username
        required
      />
      <label for="psw"><b class="label-title">Password</b></label>
      <input
        type="password"
        placeholder="Enter Password"
        name="psw"
        class="user-input"
        data-user-password
        required
      />
      <button class="submit-btn btn" type="submit" data-submit>Login</button>
    </div>
  </form>`;
};
