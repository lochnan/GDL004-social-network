// FUNCTION that calls Firebase
firebase.auth().onAuthStateChanged((user) => {
  //console.log(user);
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

// FUNCTION that triggers with the SignUp button with the Firestore Auth but also closes de modal
export function toSignUp() {
  let email = document.getElementById('email').value;
  let passwordEmail = document.getElementById('passwordEmail').value;

  firebase.auth().createUserWithEmailAndPassword(email, passwordEmail).catch((error) => {
  // Handle Errors here.
  let errorCode = error.code;
    let errorMessage = error.message;
    // alert("Te equivocaste")
    console.trace(error);
    alert(error.message);
    });

  // When the user clicks on the button, close de modal and returns to the Login page
  document.getElementById('mymodal').style.display = 'none';
  document.getElementById('signUp').style.display = 'none';
}
// IGNOREN ESTO ATTE. NANCY import hola kfkfes.js

// FUNCTION that makes login once the user has already signup with the email.
export function logIn() {
  const emailL = document.getElementById('emailL').value;
  const passwordL = document.getElementById('passwordL').value;

/* IGNOREN ESTO ATTE. NANCY hola (emailL, passwordL);
export function hola (emailL, passwordL) {firebase.auth().signInWithEmailAndPassword
  (emailL, passwordL).then(function(){ */

  firebase.auth().signInWithEmailAndPassword(emailL, passwordL).catch((error) => {
    let errorCode = error.code;
    let errorMessage = error.message;
  });
}

export function toSignOut() {
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
  }, (error) => {
    // An error happened.
  });
}
