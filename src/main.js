// Agrego un addEventListener cuando se carga la página y después cuando cambia el #
import { changeView } from './view-controler/index.js';

const init = () => {
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};
window.addEventListener('load', init);