
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
  // User is signed in.
  var displayName = user.displayName;
  var email = user.email;
  var emailVerified = user.emailVerified;
  var photoURL = user.photoURL;
  var isAnonymous = user.isAnonymous;
  var uid = user.uid;
  var providerData = user.providerData;
  
    document.getElementById('login').innerHTML = "¡Te has logueado! " + user.email;
  
  } else {
    document.getElementById('login').innerHTML = "¡No has podido ingresar!";
    // User is signed out.
  }
});
// Function that triggers with the SignUp button with the Firestore Auth
export function toSignUp() {
  let email = document.getElementById('email').value;
  let passwordEmail = document.getElementById('passwordEmail').value;

  firebase.auth().createUserWithEmailAndPassword(email, passwordEmail).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    let errorMessage = error.message;
    // alert("Te equivocaste");
      console.trace(error);
      // ...
    });
  }

export function logIn () {
  const emailL = document.getElementById('emailL').value;
  const passwordL = document.getElementById('passwordL').value;

  firebase.auth().signInWithEmailAndPassword(emailL, passwordL).catch((error) => {
    let errorCode = error.code;
    let errorMessage = error.message;
    alert(errorMessage);
  });
}

export function toSignOut() {
  const out = document.getElementById('singOut').value;

  firebase.auth().signOut().then(() => {
    // Sign-out successful.
  }, (error) => {
    // An error happened.
  });
}
