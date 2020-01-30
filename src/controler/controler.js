import { emailFirebase } from '../model/registroEmail.js';

/* Creando una constante a la que se le asigna el return
    que viene de registroEmail.js que está en signUP y que es la promesa. */

function contollerEmailSignUp(email, password) {
  const referenceSignUp = emailFirebase.toSignUp(email, password);
  referenceSignUp.then(() => {
    alert('registro exitoso');
    window.location.hash = '#/login';
  }).catch((error) => {
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
}

function controllerEmailLogIn(email, password) {
  const referenceLogIn = emailFirebase.logIn(email, password);
  referenceLogIn.then(() => {
    alert('hola');
    window.location.hash = '/home';
  }).catch((error) => {
    // let errorCode = error.code;
    let errorMessage = error.message;
    alert(errorMessage);
  });
}
export { contollerEmailSignUp, controllerEmailLogIn };
