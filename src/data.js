
// FUNCTION that 
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
    document.getElementById("prueba").innerHTML= "Puedes iniciar sesión";
  
  } else {
    document.getElementById("prueba").innerHTML= " ";
    // User is signed out.
  }
});

// FUNCTION that triggers with the SignUp button with the Firestore Auth but also closes de modal
export function toSignUp () {
  let email =  document.getElementById('email').value;
    let passwordEmail = document.getElementById('passwordEmail').value;

  firebase.auth().createUserWithEmailAndPassword(email, passwordEmail).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    //alert("Te equivocaste");
    console.trace(error);
    });
  
  // When the user clicks on the button, close de modal and returns to the Login page
   document.getElementById('mymodal').style.display = "none";
   document.getElementById('signUp').style.display = "none";
  }

// FUNCTION that makes login onces de user has already signup with the email.
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
