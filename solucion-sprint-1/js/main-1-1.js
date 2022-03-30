'use strict';

/**3. Modificar clases CSS desde JS */
const listElement = document.querySelector('.js-list');

const newFormElement = document.querySelector('.js-new-form');
newFormElement.classList.remove('collapsed');

/*4. Guarda la información en variables 
Agregar el código del li desde HTMl 
Repetir este proceso por cada gatito */
/* Elementos que usamos en el HTML */
const kittenOne =
  `<li class="card">
<article>
  <img
    class="card_img"
    src="https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg"
    alt="gatito"
  />
  <h3 class="card_title">Anastacio</h3>
  <p class="card_description">
    Ruiseño, juguetón, le guta estar tranquilo y que nadie le
    moleste. Es una maravilla acariciarle!
  </p>
</article>
</li>`;

const kittenTwo =
  ` <li class="card">
  <img
    class="card_img"
    src="https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg"
    alt="gatito"
  />
  <h3 class="card_title">Fiona</h3>
  <p class="card_description">
    Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.
    Es una maravilla acariciarle!
  </p>
</li>`;

const kittenThree =
  ` <li class="card">
  <img
    class="card_img"
    src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg"
    alt="gatito"
  />
  <h3 class="card_title">Cielo</h3>
  <p class="card_description">
    Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.
    Es una maravilla acariciarle!
  </p>
</li>`;

listElement.innerHTML += kittenOne;
listElement.innerHTML += kittenTwo;
listElement.innerHTML += kittenThree;





