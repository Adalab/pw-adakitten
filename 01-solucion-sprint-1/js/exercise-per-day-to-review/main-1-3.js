'use strict';

//1. Búsqueda por descripción
const listElement = document.querySelector('.js-list');
const input_search_desc = document.querySelector('.js_in_search_desc');
input_search_desc.value = 'risueño';
const descrSearchText = input_search_desc.value;


const kittenImageOne = "https://dev.adalab.es/gato-siames.webp";
const kittenNameOne = "Anastacio";
const kittenDescOne =
  "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.",
const kittenRaceOne = "Siamés"

const kittenOne =
  `<li class="card">
<article>
  <img
    class="card_img"
    src=${kittenImageOne}
    alt="gatito"
  />
  <h3 class="card_title">${kittenNameOne.toUpperCase()}</h3>
  <h3 class="card_race">${kittenRaceOne}</h3>
  <p class="card_description">
  ${kittenDescOne}
  </p>
</article>
</li>`;

const kittenImageTwo = "https://dev.adalab.es/sphynx-gato.webp";
const kittenNameTwo = "Cielo";
const kittenDescTwo =
  "Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.";
const kittenRaceTwo = "Sphynx"

const kittenTwo =
  `<li class="card">
<article>
  <img
    class="card_img"
    src=${kittenImageTwo}
    alt="gatito"
  />
  <h3 class="card_title">${kittenNameTwo.toUpperCase()}</h3>
  <h3 class="card_race">${kittenRaceTwo}</h3>
  <p class="card_description">
  ${kittenDescTwo}
  </p>
</article>
</li>`;

const kittenImageThree = "https://dev.adalab.es/maine-coon-cat.webp";
const kittenNameThree = "Fiona";
const kittenDescThree =
  "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.";
const kittenRaceThree = "Maine Coon"

const kittenThree =
  `<li class="card">
<article>
  <img
    class="card_img"
    src=${kittenImageThree}
    alt="gatito"
  />
  <h3 class="card_title">${kittenNameThree.toUpperCase()}</h3>
  <h3 class="card_race">${kittenRaceThree}</h3>
  <p class="card_description">
  ${kittenDescThree}
  </p>
</article>
</li>`;


if (kittenDesc1.includes(descrSearchText)) {
  listElement.innerHTML += kittenOne;
}
if (kittenDesc2.includes(descrSearchText)) {
  listElement.innerHTML += kittenTwo;

}
if (kittenDesc3.includes(descrSearchText)) {
  listElement.innerHTML += kittenThree;
}

//2. Mostrar/ocultar el formulario añadir
/* Elementos que usamos en el HTML */
const newFormElement = document.querySelector('.js-new-form');

if (newFormElement.classList.contains("collapsed")) {
  newFormElement.classList.remove('collapsed');
} else {
  newFormElement.classList.add("collapsed");
}










