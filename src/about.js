const populate = `<div class='row d-flex flex-column justify-c-center align-i-center'>
      <h1>Fellow Humans</h1>
      <div class='d-flex flex-column justify-c-center align-i-center container-about'>
      <p> As humans, we also like human food. Through eons, we learned your ways and how to develop tasty nutrients to enforce development in our body. We specialize in the art of fabricating culinary disks with curdled dairy product on top. 
      </p>

      <div class = 'd-flex flex-column cont'>
    <h1>Come to our local, no reservation needed.</h1>
<div>

<div style=" max-width:100%;overflow:hidden;color:red;width:100%;height:150px;">
<div id="googlemaps-canvas" style="height:100%; width:100%;max-width:100%;">
<iframe style="height:100%;width:100%;border:0;" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=Area+51+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8">
</iframe>
</div>
<style>#googlemaps-canvas img{max-height:none;max-width:none!important;background:none!important;}</style>
</div>
</div>
</div>
<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
   </div>
    `;

const setAbout = () => {
  document.getElementById('mainContent').innerHTML = '';
  document.getElementById('mainContent').insertAdjacentHTML('afterbegin', populate);
};
export { setAbout as default };
