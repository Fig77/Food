import sc from './scenemanager';

const setMenu = (function factory() {
  let slideCount = 0;
  
  const divFirst = {
    name: 'div',
    father: 'mainContent',
    classlist: 'row d-flex flex-column justify-c-center align-i-center',
    twinbrothers: 0,
    identifier: 'divf-',
    inner: ''
  };
  
  const menuCard = {
    name: 'div',
    father: 'divf-0',
    classlist: 'd-flex flex-column menu-card justify-c-center align-i-center',
    twinbrothers: 2,
    identifier: 'menuCard-',
    inner: ''
  };
  const menuCardArr = [divFirst, menuCard];
  
  const drawMenuCards = () => {
    sc.addElement(menuCardArr)
  };
  
//  const slide = () => {
//    document.getElementById(`card-${slideCount}`).classList.add('d-none');
//    if (slideCount >= 2) {
//      slideCount = 0;
//    } else {
//      slideCount += 1;
//    }
//    document.getElementById(`card-${slideCount}`).classList.remove('d-none');
//  };
//
//  const menuSlide = () => {
//    document.getElementById('switch').addEventListener('click', slide);
//  };
//
//  const drawMenu = () => {
//    document.getElementById('mainContent').innerHTML = '';
//    document.getElementById('mainContent').insertAdjacentHTML('afterbegin', menu);
//    menuSlide();
//  };

  return {
    drawMenuCards
  };

}());

export default setMenu;
