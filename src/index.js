import _ from 'lodash';
import { setAbout } from './about.js';
import { ladning } from './maincontent.js';
import { setMenu } from './menu.js';
document.getElementById('menu-link-0').addEventListener('click', setAbout);
document.getElementById('menu-link-1').addEventListener('click', setMenu);