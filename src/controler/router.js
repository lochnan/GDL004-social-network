import { components, loggeoArguments } from '../views/index.js';

export const controlador = {
  init: () => {
    loggeoArguments.init();
  },

  changeView: (hash) => {
    const container = document.getElementById('container');
    container.innerHTML = '';

    switch (hash) {
      case '#/':
      case '#':
      case '':
        container.appendChild(components.logIn());
        controlador.init();
        break;
      case '#/home':
        return container.appendChild(components.home());
      default:
        return container.appendChild(components.different());
    }
  },
};