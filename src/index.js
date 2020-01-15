import { toSignUp, logIn } from './data.js';

document.getElementById('submitSIE').addEventListener('click', toSignUp);
document.getElementById('submitL').addEventListener('click', logIn);


// Abrir modal de SignUp o registro
let modalSignUp = document.getElementById('mymodal'); //Get the modal
let btnSignUp = document.getElementById('openModal'); // Get the button that opens the modal

// Obtén el class que te cierra, pero en este caso igual te registra
let close = document.getElementsByClassName('close'); 

// When the user clicks on the button open the modal
btnSignUp.onclick = function () {
    modalSignUp.style.display = "block";
}

// When the user clicks on the button, close de modal and returns to the Login page
close.onclick = function() {
    modal.style.display = "none";
}

//When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalSignUp) {
        modal.style.display = "none";
    }
}

