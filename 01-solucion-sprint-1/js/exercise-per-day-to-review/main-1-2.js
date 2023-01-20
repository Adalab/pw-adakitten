'use strict';

/* Elementos que usamos en el HTML */
const listElement = document.querySelector('.js-list');

/* 1. Trabajar con variables e interpolarlas.
Repetir este proceso por cada gatito */

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




