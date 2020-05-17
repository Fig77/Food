const setAbout = () => {
  document.getElementById('mainContent').innerHTML = '';
  document.getElementById('mainContent').insertAdjacentHTML('afterbegin', populate);
};

const populate =
  `<div class='row d-flex flex-column justify-c-center align-i-center'>
      <h1>Fellow Humans</h1>
      <div class='d-flex flex-column justify-c-center align-i-center container-about'>
      <p> As humans, we also like human food. Through eons, we learned your ways and how to develop tasty nutrients to enforce development in our body. We specialize in the art of fabricating culinary disks with curdled dairy product on top. 
      <br>
      You can contact us by our primitive network message delivery system, or visit us locally in our facilities.
      <br>
      Help your humans friends trying to go home by exchanging either local currency or silicon-based modulator parts. </p>
      <span>Love, ~@#~¬|@@@. Commander of ¬#~€|#~# and head chef. </span>
      </div>
   </div>
    `;
export { setAbout };