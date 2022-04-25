'use strict';

//1. Búsqueda por descripción
const listElement = document.querySelector('.js-list');
const input_search_desc = document.querySelector('.js_in_search_desc');
input_search_desc.value = 'risueño';
const descrSearchText = input_search_desc.value;


const kittenImageOne = "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg";
const kittenNameOne = "Anastacio";
const kittenDescOne =
  "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";
const kittenRaceOne = "British Shorthair"

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

const kittenImageTwo = "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg";
const kittenNameTwo = "Cielo";
const kittenDescTwo =
  "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";
const kittenRaceTwo = "British Shorthair"

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

const kittenImageThree = "https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg";
const kittenNameThree = "Fiona";
const kittenDescThree =
  "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";
const kittenRaceThree = "British Shorthair"

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










