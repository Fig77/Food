import sc from './scenemanager';
import { sv } from './svg'

const land = (() => {
  const land = {name: 'div', father: 'mainContent', 
                 classlist: 'row d-flex flex-column justify-c-center align-i-center',
                 twinbrothers: 0, identifier: 'landing-', inner: ''};
  const h1 = {name: 'h1', father: 'landing-0', classList: 'headers-landing-1', twinbrothers: 0, identifier: 'header-', inner: 'We serve food'};
  const h2 = {name: 'h2', father: 'landing-0', classList: 'headers-landing-1', twinbrothers: 0, identifier: 'h2-', inner:'And you can eat our food'};
  const elements = [land, h1, h2];
  
  const setLanding = () => {
    let i = 0;
    while (i < elements.length) {
      sc.addElement(elements[i]);
      i += 1;
    }
    document.getElementById('landing-0').insertAdjacentHTML('beforeend', sv)
  };

  return { setLanding };
})();

export { land as default };
