import './css/main.css';
import ab from './about'
import navFooter from './navfooter';
import mcontent from './maincontent';
import sc from './scenemanager';
import men from './menu';

const init = () => {
  navFooter.drawNav();
  navFooter.drawFooter();
  mcontent.setLanding();
  const nav = document.getElementById('menu-link-1');
  nav.addEventListener('click', switchAbout);
  const nav2 = document.getElementById('menu-link-2');
  nav2.addEventListener('click', switchMenu);
};

const switchAbout = () => {
  sc.clear();
  ab.drawAbout();
};

const switchMenu = () => {
  sc.clear();
  men.drawMenuCards();
};

init();