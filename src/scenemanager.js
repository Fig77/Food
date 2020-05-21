const sceneManager = (function factory() {
  const sceneContainer =  document.createElement('div');
  sceneContainer.classList.add('scene-container');
  
  
  const addElement = (element) => {
    const dad = document.getElementById(element.father);
    let twinCounter = 0;
    console.log(element);
    while (twinCounter < element.twinbrothers+1) {
      let tempElement = document.createElement(element.name);
      tempElement.classList = (element.classlist);
      tempElement.id = element.identifier + twinCounter;
      tempElement.innerHTML = element.inner;
      dad.appendChild(tempElement);
      twinCounter += 1;
    }
  };
  
  return { addElement }
}());
export default sceneManager;
// element =  {
//  string name
//  string father
//  string classlist
//  int twinbrothers
//  string identifier-#
//  }