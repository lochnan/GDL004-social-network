export default () => {
  const viewHome = `
 <p> PÁGINA NO ENCONTRADA, LO SENTIMOS </p>`;

  const divElement = document.createElement('div');
  divElement.innerHTML = viewHome;
  return divElement;
};
