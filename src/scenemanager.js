const sceneManager = (function factory() {
  const sceneContainer =  document.createElement('div');
  sceneContainer.classList.add('scene-container');
  
  //const addContainer = (element, classlist, father) => {
  //  const tempElement = document.createElement(element);
  //  tempElement.classList.add(classlist);
  //  const dad = document.getElementsByClassName(father);
  //  dad.appendChecked(tempElement);
  //};
  
  const addElement = (element) => {
    const dad = document.getElementById('mainContent');
    let twinCounter = 0;
    console.log(element);
    while (twinCounter < element.twinbrothers+1) {
      let tempElement = document.createElement(element.name);
      tempElement.classList = (element.classlist);
      tempElement.id = element.identifier + twinCounter;
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