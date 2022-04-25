'use strict';

/* Elementos que usamos en el HTML */
const listElement = document.querySelector('.js-list');

/* 1. Trabajar con variables e interpolarlas.
Repetir este proceso por cada gatito */

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

const kittenImageTwo = "https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg";
const kittenNameTwo = "Fiona";
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

const kittenImageThree = "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg";
const kittenNameThree = "Cielo";
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


listElement.innerHTML += kittenOne;
listElement.innerHTML += kittenTwo;
listElement.innerHTML += kittenThree;


//2. Bonus: Convertir cadenas de carácteres
//Está resuelto cuando se renderea cada gatito
//La solución seria utilizar el método .toUpperCase()
const nameUpperCase = kittenNameTwo.toUpperCase();
console.log(nameUpperCase);

//3. Bonus: Reemplaza contenido
const urlReplaced = kittenImageOne.replace('https://', '');
console.log(urlReplaced);




