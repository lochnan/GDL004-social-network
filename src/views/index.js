import { contollerEmailSignUp, controllerEmailLogIn } from '../controler/controler.js';

// FUNCIÓN de REGISTRO con correo y te envía de regreso a LOGIN
const signUpArguments = {
  init: (e) => {
    const form = document.getElementById('formSignUp');
    // form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.inputEmail1.value;
    const password = form.inputPassword1.value;
    contollerEmailSignUp(email, password);
  },
};

// Función que hace LOGIN con el correo
const loggeoArguments = {
  init: (e) => {
    const form = document.getElementById('formLogIn');
    // form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.inputEmail.value;
    const password = form.inputPassword.value;
    controllerEmailLogIn(email, password);
    // });
  },
};

export { loggeoArguments, signUpArguments };
