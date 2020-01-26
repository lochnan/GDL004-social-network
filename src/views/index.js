import { emailFirebase } from '../model/registroEmail.js';
import { controlador } from '../controler/router.js';


const signUpArguments = {
  init: () => {
    const form = document.getElementById('formSignUp');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = form.inputEmail1.value;
      const password = form.inputPassword1.value;
      form.reset();
      // Creando una constante a la que se le asigna el return quie viene de registroEmail.js que está en signUP y que es la promesa.
      const promisesSigUp = emailFirebase.toSignUp(email, password);
      // Construyendo el then (caso exitoso)
      promisesSigUp.then(() => {
        alert('registro exitoso');
        controlador.changeView('#/home');

      })

    });
  },
};

const loggeoArguments = {
  init: () => {
    const form = document.getElementById('formLogIn');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailValues = {
        email: form.inputEmail.value,
        password: form.inputPassword.value,
      };
      form.reset();
      emailFirebase.logIn(emailValues.email, emailValues.password);
    });
  },
};

export { loggeoArguments, signUpArguments };

/* frank
  registroEmail.LogIn(form.inputEmail.value, emailValues.password)
  .then((data) => {
     //redirect home
  })
  .catch((data) => {
   //redirect a login
  }); */
