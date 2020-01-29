import { emailFirebase } from '../model/registroEmail.js';
import { controlador } from '../controler/router.js';

// FUNCIÓN de REGISTRO con correo y te envía de regreso a LOGIN
const signUpArguments = {
  init: () => {
    const form = document.getElementById('formSignUp');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = form.inputEmail1.value;
      const password = form.inputPassword1.value;
      form.reset();
      /* Creando una constante a la que se le asigna el return
      que viene de registroEmail.js que está en signUP y que es la promesa. */
      const promisesSignUp = emailFirebase.toSignUp(email, password);
      // Construyendo el then (caso exitoso)
      promisesSignUp.then(() => {
        alert('registro exitoso');
        controlador.changeView('#/logIn');
      });
      promisesSignUp.catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Upss contraseña inadecuada');
        } else if (errorCode === 'auth/invalid-email') {
          alert('correo inválido');
        } else {
          alert(errorMessage);
        }
      });
    });
  },
};

// Función que hace LOGIN con el correo
const loggeoArguments = {
  init: () => {
    const form = document.getElementById('formLogIn');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = form.inputEmail.value;
      const password = form.inputPassword.value;
      form.reset();
      const promisesLogIn = emailFirebase.logIn(email, password);
      promisesLogIn.then(() => {
        alert('te has loggeado');
        controlador.changeView('#/home');
      });
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
