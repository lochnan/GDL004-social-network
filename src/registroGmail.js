// REGISTRO GMAIL
function logGmail() {
  // Step 1.
// User tries to sign in to Google.
  firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).catch((error) => {
    // An error happened.
    // eslint-disable-next-line no-console
    console.log(error);
    if (error.code === 'auth/account-exists-with-different-credential') {
      // Step 2.
      // User's email already exists.
      // The pending Google credential.
    var pendingCred = error.credential;
      // The provider account's email address.
      var email = error.email;
      // Get sign-in methods for this email.
      auth.fetchSignInMethodsForEmail(email).then((methods) => {
        // Step 3.
        // If the user has several sign-in methods,
        // the first method in the list will be the "recommended" method to use.
        if (methods[0] === 'password') {
          // Asks the user their password.
          // In real scenario, you should handle this asynchronously.
          var password = promptUserForPassword(); // TODO: implement promptUserForPassword.
          auth.signInWithEmailAndPassword(email, password).then((user) => {
            // Step 4a.
            return user.linkWithCredential(pendingCred);
          }).then(() => {
            // Google account successfully linked to the existing Firebase user.
            goToApp();
          });
          return;
        }
        // All the other cases are external providers.
        // Construct provider object for that provider.
        // TODO: implement getProviderForProviderId.
        var provider = getProviderForProviderId(methods[0]);
        // At this point, you should let the user know that they already has an account
        // but with a different provider, and let them validate the fact they want to
        // sign in with this provider.
        // Sign in to provider. Note: browsers usually block popup triggered asynchronously,
        // so in real scenario you should ask the user to click on a "continue" button
        // that will trigger the signInWithPopup.
        auth.signInWithPopup(provider).then((result) => {
          // Remember that the user may have signed in with an account that has a different email
          // address than the first one. This can happen as Firebase doesn't control the provider's
          // sign in flow and the user is free to login using whichever account they own.
          // Step 4b.
          // Link to Google credential.
          // As we have access to the pending credential, we can directly call the link method.
          result.user.linkAndRetrieveDataWithCredential(pendingCred).then(() => {
            // Google account successfully linked to the existing Firebase user.
            goToApp();
          });
        });
      });
    }
  });
}
export const loginGmail = logGmail;

// REGISTRO FACEBOOK
var provider = new firebase.auth.FacebookAuthProvider();

  function loginFB() {
        firebase.auth().signInWithPopup(provider).then(function(result) {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          // ...
        }).catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
  }
  export const logFacebook = loginFB;