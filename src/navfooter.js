import sc from './scenemanager';
import {
  github,
} from './svg';

const setDefault = (() => {
  const header = {
    name: 'header',
    father: 'body-id',
    classlist: 'grid-template row',
    twinbrothers: 0,
    identifier: 'head-',
    inner: '',
  };
  const ul = {
    name: 'ul',
    father: 'head-0',
    classlist: 'row d-flex nav',
    twinbrothers: 0,
    identifier: 'ul-header-',
    inner: '',
  };
  const li = {
    name: 'li',
    father: 'ul-header-0',
    classlist: 'row nav',
    twinbrothers: 3,
    identifier: 'menu-link-',
    inner: '',
  };
  const elemHeader = [header, ul, li];
  const footer = {
    name: 'footer',
    father: 'body-id',
    classlist: 'footer d-flex',
    twinbrothers: 0,
    identifier: 'footer-',
    inner: '',
  };
  const span = {
    name: 'span',
    father: 'footer-0',
    classlist: '',
    twinbrothers: 0,
    identifier: 'span-1',
    inner: 'Contact: ',
  };

  const elemFooter = [footer, span];
  const setNav = () => {
    let i = 0;
    while (i < elemHeader.length) {
      sc.addElement(elemHeader[i]);
      i += 1;
    }
    document.getElementById('menu-link-0').insertAdjacentHTML('afterbegin', '<a href=\'index.html\'>Home</a>');
    document.getElementById('menu-link-1').innerHTML = 'Food';
    document.getElementById('menu-link-2').innerHTML = 'Menus';
  };

  const setFooter = () => {
    let i = 0;
    while (i < elemFooter.length) {
      sc.addElement(elemFooter[i]);
      i += 1;
    }
    document.getElementById('footer-0').insertAdjacentHTML('beforeEnd', github);
  };

  const drawNav = () => {
    setNav();
  };

  const drawFooter = () => {
    setFooter();
  };

  return {
    drawNav,
    drawFooter,
  };
})();

export {
  setDefault as
  default,
};
