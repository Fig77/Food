import './css/main.css';
import sc from './scenemanager';

//<div class='row d-flex flex-column justify-c-center align-i-center' id='landing'>
// element =  {
//  string name
//  string father
//  string classlist
//  int twinbrothers
//  string identifier-#
//  }
// <h1 id='headers-landing-1'>We cook food</h1>
//  <h2 id='headers-landing-2'>And you can eat our food</h2>
//
const setLanding = () => {
  sc.addElement({name: 'div', father: 'mainContent', 
                 classlist: 'row d-flex flex-column justify-c-center align-i-center',
                 twinbrothers: 0, identifier: 'landing-'});
  
  
};

setLanding();