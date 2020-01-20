import { components } from '../views/guider.js';

const changeView = (route) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (route) {
    case '#/':
      return container.appendChild(components.home());
    case '#/logIn':
      return container.appendChild(components.logIn());
    default:
      break;
  }
};
export { changeView };