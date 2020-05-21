import './css/main.css';
import ab from './about'
import navFooter from './navfooter';
import mcontent from './maincontent';
import sc from './scenemanager';

const init = () => {
  navFooter.drawNav();
  navFooter.drawFooter();
  mcontent.setLanding();
  const nav = document.getElementById('menu-link-1');
  nav.addEventListener('click', switchAbout);
};

const switchAbout = () => {
  sc.clear();
  ab.drawAbout();
}

init();