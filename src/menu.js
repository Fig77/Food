import sc from './scenemanager';

const setMenu = (function factory() {
  let slideCount = 0;

  const clear = () => {
    slideCount = 0;
  };

  const extraContainer = {
    name: 'div',
    father: 'mainContent',
    classlist: 'row grid-template justify-i-center',
    twinbrothers: 0,
    identifier: 'extraContainer',
    inner: '',
  };

  const divFirst = {
    name: 'div',
    father: 'extraContainer0',
    classlist: 'row d-flex justify-c-center align-i-center',
    twinbrothers: 0,
    identifier: 'div-pizza-',
    inner: '',
  };

  const menuCard = {
    name: 'div',
    father: 'div-pizza-0',
    classlist: 'd-flex d-flex-column-sm menu-card align-i-center justify-c-center',
    twinbrothers: 2,
    identifier: 'menu-card-',
    inner: '',
  };

  const picture = {
    name: 'div',
    father: 'menu-card-0',
    classlist: 'pizza-img',
    twinbrothers: 0,
    identifier: '',
    inner: '',
  };
  const picture1 = {
    name: 'div',
    father: 'menu-card-1',
    classlist: 'pizza-img pizza-1',
    twinbrothers: 0,
    identifier: '',
    inner: '',
  };
  const picture2 = {
    name: 'div',
    father: 'menu-card-2',
    classlist: 'pizza-img pizza-2',
    twinbrothers: 0,
    identifier: '',
    inner: '',
  };

  const ulnutri = {
    name: 'ul',
    father: '',
    classlist: 'nutritional-facts',
    twinbrothers: 0,
    identifier: '',
    inner: '',
  };

  const linutri = {
    name: 'li',
    father: '',
    classlist: 'nutritional-facts',
    twinbrothers: 3,
    identifier: '',
    inner: 'nutrion-item: 4g',
  };

  const titleFood = {
    name: 'h3',
    classlist: 'nutritional-facts',
    twinbrothers: 0,
    identifier: '',
    inner: 'Pizza item',
  };

  const containerButton = {
    name: 'div',
    father: 'extraContainer0',
    classlist: 'd-flex row',
    twinbrothers: 0,
    identifier: 'containerButton',
    inner: '',
  };

  const button = {
    name: 'button',
    father: 'containerButton0',
    classlist: 'switch',
    twinbrothers: 1,
    identifier: 'but-',
    inner: '',
  };
  const menuCardArr = [extraContainer, divFirst, menuCard];
  const pics = [picture, picture1, picture2];

  // menu slide
  const slide = () => {
    document.getElementById(`menu-card-${slideCount}`).classList.add('d-none');
    if (slideCount >= 2) {
      slideCount = 0;
    } else {
      slideCount += 1;
    }
    document.getElementById(`menu-card-${slideCount}`).classList.remove('d-none');
  };

  const menuSlide = () => {
    sc.addElement(containerButton);
    sc.addElement(button);
    document.getElementById('but-0').innerHTML = 'Order';
    document.getElementById('but-1').innerHTML = 'Next';
    document.getElementById('but-1').addEventListener('click', slide);
  };
  // menu slide

  const drawMenuCards = () => {
    let i = 0;
    while (i < menuCardArr.length) {
      sc.addElement(menuCardArr[i]);
      i += 1;
    }
    for (let k = 0; k < 3; k += 1) {
      ulnutri.father = `menu-card-${k}`;
      ulnutri.identifier = `ulnutri-${k}-`;
      titleFood.father = `ulnutri-${k}-0`;
      linutri.father = `ulnutri-${k}-0`;
      sc.addElement(pics[k]);
      sc.addElement(ulnutri);
      sc.addElement(titleFood);
      sc.addElement(linutri);
      if (k > 0) {
        document.querySelector(`#menu-card-${k}`).classList.add('d-none');
      }
    }
    menuSlide();
  };

  return {
    drawMenuCards,
    clear,
  };
}());

export default setMenu;
