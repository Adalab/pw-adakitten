'use strict';

/* Elementos que usamos en el HTML */
const newFormElement = document.querySelector('.js-new-form');
const listElement = document.querySelector('.js-list');
const searchButton = document.querySelector('.js-button-search');
const buttonAdd = document.querySelector('.js-btn-add');
const buttonCancelForm = document.querySelector('.js-btn-cancel');
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const inputRace = document.querySelector('.js-input-race');
const linkNewFormElememt = document.querySelector('.js-button-new-form');
const labelMesSageError = document.querySelector('.js-label-error');
const input_search_desc = document.querySelector('.js_in_search_desc');
const input_search_race = document.querySelector('.js_in_search_race');

const GITHUB_USER = 'adalab';
const SERVER_URL = `https://dev.adalab.es/api/kittens/${GITHUB_USER}`;

const kittenListStored = JSON.parse(localStorage.getItem('kittensList'));

//Objetos con cada gatito
let kittenDataList = [];
if (kittenListStored) {
  //si existe el listado de gatitos en el local storage
  kittenDataList = kittenListStored;
  // vuelve a pintar el listado de gatitos
  renderKittenList(kittenDataList);
} else {
  fetch(SERVER_URL, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => {
      kittenDataList = data.results;
      renderKittenList(kittenDataList);
    })
    .catch((error) => {
      console.error(error);
    });
}

//Funciones
function renderKitten(kittenData) {
  const kitten = `<li class="card">
    <article>
      <img
        class="card_img"
        src=${kittenData.image}
        alt="gatito"
      />
      <h3 class="card_title">${kittenData.name}</h3>
      <h3 class="card_race">${kittenData.race}</h3>
      <p class="card_description">
      ${kittenData.desc}
      </p>
    </article>
    </li>`;
  return kitten;
}

function renderKittenList(kittenDataList) {
  listElement.innerHTML = '';
  for (const kittenItem of kittenDataList) {
    listElement.innerHTML += renderKitten(kittenItem);
  }
}

//Mostrar/ocultar el formulario
function showNewCatForm() {
  newFormElement.classList.remove('collapsed');
}
function hideNewCatForm() {
  newFormElement.classList.add('collapsed');
}

function handleClickNewCatForm(event) {
  event.preventDefault();
  if (newFormElement.classList.contains('collapsed')) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
}
//Adicionar nuevo gatito
function addNewKitten(event) {
  event.preventDefault();
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  const valueRace = inputRace.value;

  if (valueDesc === '' && valuePhoto === '' && valueName === '') {
    labelMesageError.innerHTML = 'Debe rellenar todos los valores';
  } else {
    if (valueDesc !== '' && valuePhoto !== '' && valueName !== '') {
      labelMesageError.innerHTML = '';
      //Construir un nuevo objeto con el gatito
      const newKittenDataObject = {
        image: valuePhoto,
        name: valueName,
        desc: valueDesc,
        race: valueRace,
      };
      addNewKittenServer(newKittenDataObject);
    }
  }
}
//Cancelar la búsqueda de un gatito
function cancelNewKitten(event) {
  event.preventDefault();
  newFormElement.classList.add('collapsed');
  inputDesc.value = '';
  inputPhoto.value = '';
  inputName.value = '';
}

//Filtrar por descripción
function filterKitten(event) {
  event.preventDefault();
  const descrSearchText = input_search_desc.value;
  listElement.innerHTML = '';
  const dataKittenFiltered = kittenDataList
    .filter((kitten) => kitten.desc.includes(descrSearchText))
    //Filtrar por raza además
    .filter((kitten) => kitten.race === raceSearchText);
  renderKittenList(dataKittenFiltered);
}

//add new kitten al server
function addNewKittenServer(newKittenDataObject) {
  fetch(SERVER_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newKittenDataObject),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.success) {
        //Agregar un nuevo gatito al listado
        kittenDataList.push(newKittenDataObject);
        localStorage.setItem('kittensList', JSON.stringify(kittenDataList));

        //Limpiar los valores del gatito
        inputDesc.value = '';
        inputPhoto.value = '';
        inputName.value = '';
        inputRace.value = '';

        //Mostrar mensaje de que se ha creado correctamente
        labelMesageError.innerHTML = 'Mola! Un nuevo gatito en Adalab!';

        //vuelve a pintar el listado de gatitos
        renderKittenList(kittenDataList);
      } else {
        labelMesageError.innerHTML = 'No se ha podido guardar el gatito en el servidor. Inténtalo más tarde.';
      }
    });
}

//Mostrar el litado de gatitos en ell HTML
renderKittenList(kittenDataList);

//Eventos
linkNewFormElememt.addEventListener('click', handleClickNewCatForm);

searchButton.addEventListener('click', filterKitten);
buttonAdd.addEventListener('click', addNewKitten);
buttonCancelForm.addEventListener('click', cancelNewKitten);
