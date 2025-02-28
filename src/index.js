import { toSignUp, toSignOut } from './data.js';
import { logIn } from './logIn.js';
import { loginGmail, logFacebook } from './registroGmail.js';

document.getElementById('submitSIE').addEventListener('click', toSignUp);
document.getElementById('submitL').addEventListener('click', logIn);

// MODAL DE REGISTRO CON CORREO
// Abrir modal de SignUp o registro
let modalSignUp = document.getElementById('mymodal'); //Get the modal
let btnSignUp = document.getElementById('openModal'); // Get the button that opens the modal
// When the user clicks on the button open the modal
btnSignUp.onclick = function () {
    modalSignUp.style.display = "block";
}

/*When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalSignUp) {
        modalSignUp.style.display = "none";
    }
}
*/


document.getElementById('submitL').addEventListener('click', logIn);

document.getElementById('Gmail').addEventListener('click', loginGmail);

document.getElementById('singOut').addEventListener('click', toSignOut);

document.getElementById('FB').addEventListener('click',logFacebook);


