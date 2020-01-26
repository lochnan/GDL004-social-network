export default () => {
  const viewHome = `
 <p> LO LOGRASTE YA NO LLOREN </p>`;

  const divElement = document.createElement('div');
  divElement.innerHTML = viewHome;
  return divElement;
};
