import sc from './scenemanager';
import {
  googleMap
} from './svg'

const about = (function factory() {

  const divContainer = {
    name: 'div',
    father: 'mainContent',
    classlist: 'row d-flex flex-column justify-c-center align-i-center',
    twinbrothers: 0,
    identifier: 'divC-',
    inner: ''
  };
  const h1 = {
    name: 'h1',
    father: 'divC-0',
    classlist: '',
    twinbrothers: 0,
    identifier: 'h1About-',
    inner: 'Fellow Humans'
  };

  const divTwo = {
    name: 'h1',
    father: 'divC-0',
    classlist: 'd-flex flex-column justify-c-center align-i-center container-about',
    twinbrothers: 0,
    identifier: 'divAboutsub-',
    inner: ''
  };

  const p = {
    name: 'p',
    father: 'divC-0',
    classlist: '',
    twinbrothers: 0,
    identifier: 'pAbout-',
    inner: 'As humans, we also like human food. Through eons, we learned your ways and how to develop tasty nutrients to enforce development in our body. We specialize in the art of fabricating culinary disks with curdled dairy product on top.'
  };

  const divh12 = {
    name: 'h1',
    father: 'divC-0',
    classlist: 'd-flex flex-column cont',
    twinbrothers: 0,
    identifier: 'divh12-',
    inner: ''
  };


  const h1Local = {
    name: 'h1',
    father: 'divC-0',
    classlist: '',
    twinbrothers: 0,
    identifier: 'h1About-2-',
    inner: 'Come to our local, no reservation needed.'
  };


  const land = {
    name: 'div',
    father: 'mainContent',
    classlist: 'row d-flex flex-column justify-c-center align-i-center',
    twinbrothers: 0,
    identifier: 'landing-',
    inner: ''
  };

  const elements = [divContainer, h1, divTwo, p, divh12, h1Local];

  function  drawAbout() {
    let i = 0;
    while (i < elements.length) {
      sc.addElement(elements[i]);
      i += 1;
    }
    document.getElementById('divC-0').insertAdjacentHTML('beforeend', googleMap);
  };

  return { drawAbout };
}());

export default about;