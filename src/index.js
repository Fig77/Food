import _ from 'lodash'; // eslint-disable-line
import setDefault from './navfooter';
import setAbout from './about';
import './maincontent';
import setMenu from './menu';
import './css/main.css';

window.onload = () => {
  setDefault();
  document.getElementById('menu-link-0').addEventListener('click', setAbout);
  document.getElementById('menu-link-1').addEventListener('click', setMenu);
};
