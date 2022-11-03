const newFormElement = document.querySelector('.js-new-form');
const linkNewFormElememt = document.querySelector('.js-button-new-fom');

//Lección 2.5 Funciones
//1. Mostrar/ocultar el formulario
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
linkNewFormElememt.addEventListener('click', handleClickNewCatForm);

//2. Crear el gatito en HTML
function renderKitten(image, desc, name, race) {
  const kitten = `<li class="card">
    <article>
      <img
        class="card_img"
        src=${image}
        alt="gatito"
      />
      <h3 class="card_title">${name}</h3>
      <h3 class="card_race">${race}</h3>
      <p class="card_description">
      ${desc}
      </p>
    </article>
    </li>`;
  return kitten;
}

//3. Adicionar nuevo gatito
const buttonAdd = document.querySelector('.js-btn-add');
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMesageError = document.querySelector('.js-label-error');

buttonAdd.addEventListener('click', addNewKitten);
function addNewKitten(event) {
  event.preventDefault();
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;

  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    labelMesageError.innerHTML = 'Debe rellenar todos los valores';
  } else {
    if (valueDesc !== '' && valuePhoto !== '' && valueName !== '') {
      labelMesageError.innerHTML = '';
    }
  }
}

//4. Cancelar nuevo gatito
const buttonCancelForm = document.querySelector('.js-btn-cancel');
buttonCancelForm.addEventListener('click', cancelNewKitten);
function cancelNewKitten(event) {
  event.preventDefault();
  newFormElement.classList.add('collapsed');
  inputDesc.value = '';
  inputPhoto.value = '';
  inputName.value = '';
}

//5. Filtrar por descripción
const searchButton = document.querySelector('.js-button-search');
searchButton.addEventListener('click', filterKitten);
const input_search_desc = document.querySelector('.js_in_search_desc');
const descrSearchText = input_search_desc.value;

function filterKitten(event) {
  event.preventDefault();
  console.log('hola');
  listElement.innerHTML = '';
  if (kittenDesc1.includes(descrSearchText)) {
    listElement.innerHTML += kittenOne;
  }
  if (kittenDesc2.includes(descrSearchText)) {
    listElement.innerHTML += kittenTwo;
  }
  if (kittenDesc3.includes(descrSearchText)) {
    listElement.innerHTML += kittenThree;
  }
}

//6. BONUS Mostrar la raza o no
function renderRace(race) {
  let htmlRace = '';
  if (race === '') {
    htmlRace = `<p class="card_race">No se ha especificado la raza</p>`;
  } else {
    htmlRace = `<h3 class="card_race">${race}</h3>`;
  }
  return htmlRace;
}

//7. BONUS: Funciones dentro de funciones
//Esto sería la modificación de la función del ejercicio 2
function renderKitten(image, desc, name, race) {
  const liElement = `<li class="card">`;
  const articleElement = `<article>`;
  const imgElement = `<img class="card_img" src=${image} alt="gatito"/>`;
  const h3Element = `<h3 class="card_title">${name.toUpperCase()}</h3>`;
  const raceElement = getRace(race);
  const descriptionParagraph = `<p>${desc}`;
  const articleCloseElement = `</article>`;
  const liCloseElement = `</li>`;

  const html =
    liElement +
    articleElement +
    imgElement +
    h3Element +
    raceElement +
    descriptionParagraph +
    articleCloseElement +
    liCloseElement;

  return html;
}
