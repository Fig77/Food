let slideCount = 0;
const menu = `<div class='row d-flex flex-column justify-c-center align-i-center'>
    
  <div class='d-flex flex-column menu-card justify-c-center align-i-center' id = 'card-0'>
 <h3>Disk with melted lactos and animal sausages</h3>
      <div class='d-flex justify-c-center'>
      <div class='pizza-img'></div>
        <ul class='nutritional-facts col-6'>
          <li>Total Fat 13g</li>
          <li>Sodium 760mg</li>
          <li>Protein 13g</li>
          <li>Martian refined dust residue 9g</li>
        </ul>
      </div>
        <span> $ 3.99 US currency. </span>
      </div>
     <div class='d-flex flex-column align-i-center menu-card d-none' id='card-1'>
      <h3>Disk with double melted curdled dairy product</h3>
      <div class='d-flex justify-c-center'>
      <div class='pizza-img' id='pizza-img-1'></div>
        <ul class='nutritional-facts col-6'>
          <li>Total Fat 20g</li>
          <li>Sodium 1060mg</li>
          <li>Protein 15g</li>
          <li>Martian refined dust residue 9g</li>
        </ul>
      </div>
        <span> $ 3.99 US currency. </span>
      </div>
  <div class='d-flex flex-column align-i-center menu-card d-none' id='card-2'>
<h3>Disk with slices of Ananas comosus</h3>
      <div class='d-flex justify-c-center'>
      <div class='pizza-img' id='pizza-img-2'></div>
        <ul class='nutritional-facts col-6'>
          <li>Total Fat 10g</li>
          <li>Sodium 7000mg</li>
          <li>Protein 10g</li>
          <li>Martian refined dust residue 29g</li>
        </ul>
      </div>
        <span> $ 3.99 US currency. </span>
      </div>
<div class='d-flex'>
      <button class='switch'>Order</button>
      <button class='switch' id='switch'>Next</button>
</div>
      </div>

   </div>
    `;

const slide = () => {
  document.getElementById(`card-${slideCount}`).classList.add('d-none');
  if (slideCount >= 2) {
    slideCount = 0;
  } else {
    slideCount += 1;
  }
  document.getElementById(`card-${slideCount}`).classList.remove('d-none');
};

const menuSlide = () => {
  document.getElementById('switch').addEventListener('click', slide);
};

const setMenu = () => {
  document.getElementById('mainContent').innerHTML = '';
  document.getElementById('mainContent').insertAdjacentHTML('afterbegin', menu);
  menuSlide();
};

export { setMenu as default };
