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
    src="https://dev.adalab.es/gato-siames.webp"
    alt="gatito"
  />
  <h3 class="card_title">Anastacio</h3>
  <p class="card_description">
  "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente."
  </p>
</article>
</li>`;

const kittenTwo =
  ` <li class="card">
  <img
    class="card_img"
    src="https://dev.adalab.es/sphynx-gato.webp"
    alt="gatito"
  />
  <h3 class="card_title">Fiona</h3>
  <p class="card_description">
  "Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo."
  </p>
</li>`;

const kittenThree =
  ` <li class="card">
  <img
    class="card_img"
    src="https://dev.adalab.es/maine-coon-cat.webp"
    alt="gatito"
  />
  <h3 class="card_title">Cielo</h3>
  <p class="card_description">
  "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.";
  </p>
</li>`;

listElement.innerHTML += kittenOne;
listElement.innerHTML += kittenTwo;
listElement.innerHTML += kittenThree;





