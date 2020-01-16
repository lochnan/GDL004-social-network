export function logIn() {
  const emailL = document.getElementById('emailL').value;
  const passwordL = document.getElementById('passwordL').value;
  firebase.auth().signInWithEmailAndPassword(emailL, passwordL).catch(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
  });
}
