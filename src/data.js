export const example = () => {
    // aquí tu código
}

// Function that triggers with the SignUp button with the Firestore Auth
export function toSignUp () {
    let email =  document.getElementById('email').value;
    let passwordEmail = document.getElementById('passwordEmail').value;

    firebase.auth().createUserWithEmailAndPassword(email, passwordEmail).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("Te equivocaste");
      console.trace(error);
      // ...
    });
  }