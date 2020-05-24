const sceneManager = (function factory() {
  const sceneContainer = document.createElement('div');
  sceneContainer.classList.add('scene-container');

  const clear = () => {
    const contain = document.getElementById('mainContent');
    while (contain.firstChild) {
      contain.firstChild.remove();
    }
  };

  function addElement(element) {
    const dad = document.getElementById(element.father);
    let twinCounter = 0;
    while (twinCounter < element.twinbrothers + 1) {
      const tempElement = document.createElement(element.name);
      tempElement.classList = (element.classlist);
      if (element.identifier !== '') {
        tempElement.id = element.identifier + twinCounter;
      }
      tempElement.innerHTML = element.inner;
      dad.appendChild(tempElement);
      twinCounter += 1;
    }
  }

  return {
    addElement,
    clear,
  };
}());
export default sceneManager;
// element =  {
//  string name
//  string father
//  string classlist
//  int twinbrothers
//  string identifier-#
//  }
