// FUNCTION that calls Firebase
export const emailFirebase = {

  stateChanged: (user) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        let displayName = user.displayName;
        let email = user.email;
        let emailVerified = user.emailVerified;
        let photoURL = user.photoURL;
        let isAnonymous = user.isAnonymous;
        let uid = user.uid;
        let providerData = user.providerData;
        document.getElementById('prueba').innerHTML = 'Puedes iniciar sesión';
      } else {
        document.getElementById('prueba').innerHTML = '';
        // User is signed out.
      }
    });
  },

  // FUNCTION that triggers with the SignUp button with the Firestore Auth but also closes de modal
  toSignUp: (email, passwordEmail) => {
    const promiseSignUp = firebase.auth().createUserWithEmailAndPassword(email, passwordEmail);
    return promiseSignUp;
  },

  // FUNCTION that makes login once the user has already signup with the email.
  logIn: (emailL, passwordL) => {
    firebase.auth().signInWithEmailAndPassword(emailL, passwordL)
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Upss contraseña incorrecta');
        } else if (errorCode === 'auth/invalid-email') {
          alert('correo inválido');
        } else {
          alert(errorMessage);
        }
      })
  }
};

/*  ESTA FUNCIÓN CIERRA SESIÓN DE LA APLICACIÓN
export function toSignOut() {
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
  }, (error) => {
    // An error happened.
  });
}
*/


// logIn: (emailL, passwordL) => {
//   firebase.auth().signInWithEmailAndPassword(emailL, passwordL)
//     .catch((error) => {
//       let errorCode = error.code;
//       let errorMessage = error.message;
//       if (errorCode === 'auth/wrong-password') {
//         alert('Upss contraseña incorrecta');
//       } else if (errorCode === 'auth/invalid-email') {
//         alert('correo inválido');
//       } else {
//         alert(errorMessage);
//       }
//     })
