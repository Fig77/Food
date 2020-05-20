import _ from 'lodash'; // eslint-disable-line
import setDefault from './navfooter';
import ab from './about';
import './maincontent';
import men from './menu';
import './css/main.css';

const switchAbout = () => {
  ab.drawAbout();
}

const switchMenu = () => {
  men.drawMenu();
}

setDefault();
document.getElementById('menu-link-0').addEventListener('click', switchAbout);
document.getElementById('menu-link-1').addEventListener('click', switchMenu);

