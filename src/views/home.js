export default () => {
  const viewHome = `
 <p>Esta es una prueba. Esta es la vista de HOME 
 y está siendo inserdada con JS a través de que se
 ejecuta el método load y el hash por un addEventListener.
 Además lo estoy exportando al HTML al div id container </p>`;

  const divElement = document.createElement('div');
  divElement.innerHTML = viewHome;
  return divElement;
};



/*
<!--LOGIN-->
  <div id="Login">
    <h1>Acceso</h1>
    <!---Boton de FB-->
    <div id="FB"><img src="img/loginFacebook.png"></div>
    <!---Botón de Gmail-->
    <div id="Gmail"><img src="img/loginGoogle.png"></div>
    <!---Área de acceso o login con email-->
  
      <div id="loginEmail">
        <div id = "prueba"></div>
        <input type="email" id="emailL" placeholder="email">
        <input type="password" id="passwordL" placeholder="paswword">
        <button id="submitL">Log In</button>
        <button id="singOut">Cerrar sesion</button>  
      </div>

  </div>

<!---Registro con correo si no tienes cuenta-->
  <div id="signUp">
    <p>¿No tienes cuenta?</p>
      <div id="openModal"><button>Regístrate</button></div> <!--Open the modal-->
  </div>

<!--MODAL-->
<div id="mymodal" class="modal">
  
  <!-- CONTENIDO DEL MODAL DE REGISTRO O SIGNUP-->

  <div id="contSigUpEmail" class="modal-content">
    <h1>Área de registro</h1>
      <input type="email" id="email" placeholder="Coloca tu email">
      <input type="password" id="passwordEmail" placeholder="Coloca tu Password">
      <button id="submitSIE" class="close">Registro</button> <!--O signUp-->
      <h1 id="login"></h1>
  </div>

</div>
*/