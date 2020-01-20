export default () => {
  const viewLogIn = `
   <p>Esta es una prueba. Esta es la vista de LOGIN 
   y está siendo inserdada con JS a través de que se
   ejecuta el método load y el hash por un addEventListener.
   Además lo estoy exportando al HTML al div id container </p>`;
  const divElement = document.createElement('div');
  divElement.innerHTML = viewLogIn;
  return divElement;
};
