import sc from './scenemanager';

const setMenu = (function factory() {
  let slideCount = 0;

  const divFirst = {
    name: 'div',
    father: 'mainContent',
    classlist: 'row d-flex justify-c-center align-i-center',
    twinbrothers: 0,
    identifier: 'div-pizza-',
    inner: ''
  };

  const menuCard = {
    name: 'div',
    father: 'div-pizza-0',
    classlist: 'd-flex menu-card align-i-center',
    twinbrothers: 2,
    identifier: 'menu-card-',
    inner: ''
  };
  const picture = {
    name: 'div',
    father: 'menu-card-0',
    classlist: 'pizza-img',
    twinbrothers: 0,
    identifier: '',
    inner: ''
  };
  const picture1 = {
    name: 'div',
    father: 'menu-card-1',
    classlist: 'pizza-img',
    twinbrothers: 0,
    identifier: '',
    inner: ''
  };
  const picture2 = {
    name: 'div',
    father: 'menu-card-2',
    classlist: 'pizza-img',
    twinbrothers: 0,
    identifier: '',
    inner: ''
  };

  const ulnutri = {
    name: 'ul',
    father: '',
    classlist: 'nutritional-facts',
    twinbrothers: 0,
    identifier: '',
    inner: ''
  };
  
  const linutri = {
    name: 'li',
    father: '',
    classlist: 'nutritional-facts',
    twinbrothers: 3,
    identifier: '',
    inner: 'nutrion-item: 4g'
  };
  
  const titleFood = {
    name: 'h3',
    classlist: 'nutritional-facts',
    twinbrothers: 0,
    identifier: '',
    inner: 'Pizza item'
  };

  const menuCardArr = [divFirst, menuCard];

  const drawMenuCards = () => {
    let i = 0;
    while (i < menuCardArr.length) {
      sc.addElement(menuCardArr[i]);
      i += 1;
    }
    sc.addElement(picture);
    sc.addElement(picture1);
    sc.addElement(picture2);
    for (let k = 0; k < 3; k++) {
      ulnutri.father= `menu-card-${k}`;
      ulnutri.identifier = `ulnutri-${k}-`;
      titleFood.father = `ulnutri-${k}-0`;
      linutri.father =`ulnutri-${k}-0`;
      sc.addElement(ulnutri);
      sc.addElement(titleFood);
      sc.addElement(linutri);
    }
  };

  return {
    drawMenuCards,
  };

}());

export default setMenu;
