import { toSignUp, toSignOut } from './data.js';
import { logIn } from './logIn.js';
import { loginGmail, logFacebook } from './registroGmail.js';

document.getElementById('submitSIE').addEventListener('click', toSignUp);

document.getElementById('submitL').addEventListener('click', logIn);

document.getElementById('Gmail').addEventListener('click', loginGmail);

document.getElementById('singOut').addEventListener('click', toSignOut);

document.getElementById('FB').addEventListener('click',logFacebook);



  
