// Agrego un addEventListener cuando se carga la página y después cuando cambia el #
import { controlador } from './controler/router.js';

const init = () => {
  controlador.changeView(window.location.hash);
  window.addEventListener('hashchange', () => controlador.changeView(window.location.hash));
};

window.addEventListener('load', init);