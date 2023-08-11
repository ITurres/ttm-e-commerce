import { loginModalTemplate } from '../markup-templates/login-modal-template.js';

const loginModal = document.querySelector('[data-modal-holder]');

loginModal.innerHTML = loginModalTemplate();
