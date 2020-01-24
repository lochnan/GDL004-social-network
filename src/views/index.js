import Home from './home.js';
import LogIn from './logIn.js';
import Different from './page404.js';
import { emailFirebase } from '../model/registroEmail.js';

const components = {
  home: Home,
  logIn: LogIn,
  different: Different,
};

const signUpArguments = {
  init: () => {
    const form = document.getElementById('formSignUp');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = form.inputEmail1.value;
      const password = form.inputPassword1.value;
      emailFirebase.toSignUp(email, password);
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

export { components, loggeoArguments, signUpArguments };

/* frank
  registroEmail.LogIn(form.inputEmail.value, emailValues.password)
  .then((data) => {
     //redirect home
  })
  .catch((data) => {
   //redirect a login
  }); */
