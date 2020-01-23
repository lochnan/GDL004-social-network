import Home from './home.js';
import LogIn from './logIn.js';
import Different from './page404.js';
import { controlador } from '../controler/router.js';
import { emailFirebase } from '../model/registroEmail.js';


const components = {
  home: Home,
  logIn: LogIn,
  different: Different,
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

      const prueba = emailFirebase.logIn(emailValues.email, emailValues.password);
      console.log(prueba);
    });
  },
};

export { components, loggeoArguments };

/* frank
  registroEmail.LogIn(form.inputEmail.value, emailValues.password)
  .then((data) => {
     //redirect home
  })
  .catch((data) => {
   //redirect a login
  });*/