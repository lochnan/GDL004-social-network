export const example = () => {
    // aquí tu código
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    document.getElementById("login").innerHTML= "¡Te has logueado!" + user.email;
  
  } else {
    document.getElementById("login").innerHTML= "¡No has podido ingresar!";
    // User is signed out.
  
  }
});
// Function that triggers with the SignUp button with the Firestore Auth
export function toSignUp () {
    let email =  document.getElementById('email').value;
    let passwordEmail = document.getElementById('passwordEmail').value;

    firebase.auth().createUserWithEmailAndPassword(email, passwordEmail).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      //alert("Te equivocaste");
      console.trace(error);
      // ...
    });
  }

export function logIn () {
  let emailL =  document.getElementById('emailL').value;
  let passwordL = document.getElementById('passwordL').value;

  firebase.auth().signInWithEmailAndPassword(emailL, passwordL).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
  });

}