
//Lección 2.4 Eventos
//1. Mostrar/ocultar formulario
/* Elementos que usamos en el HTML */
const newFormElement = document.querySelector('.js-new-form');
const linkNewFormElememt = document.querySelector('.js-button-new-form');
linkNewFormElememt.addEventListener("click", (event) => {
    event.preventDefault();
    if (newFormElement.classList.contains("collapsed")) {
        newFormElement.classList.remove('collapsed');
    } else {
        newFormElement.classList.add("collapsed");
    }
});

//2. Validar formulario nuevo gatito
const buttonAdd = document.querySelector('.js-btn-add');
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMesageError = document.querySelector('.js-label-error');

buttonAdd.addEventListener("click", (event) => {
    event.preventDefault();
    const valueDesc = inputDesc.value;
    const valuePhoto = inputPhoto.value;
    const valueName = inputName.value;

    if (valueDesc === "" || valuePhoto === "" || valueName === "") {
        labelMesageError.innerHTML = "Debe rellenar todos los valores";
    } else {
        if (valueDesc !== "" && valuePhoto !== "" && valueName !== "") {
            labelMesageError.innerHTML = "";
        }
    }
});

//3. Validar formulario búsqueda
const buttonSearch = document.querySelector('.js-btn-search');
const inputDescSearch = document.querySelector('.js_in_search_desc');
const inputRaceSearch = document.querySelector('.js-input-search-race');
const labelMesageErrorSearch = document.querySelector('.js-label-error-search');

buttonSearch.addEventListener("click", (event) => {
    event.preventDefault();
    const valueDescSearch = inputDescSearch.value;
    const valueRaceSearch = inputRaceSearch.value;
    if (valueDescSearch === "" || valueRaceSearch === "") {
        labelMesageErrorSearch.innerHTML = "Debe rellenar algún";
    } else {
        labelMesageErrorSearch.innerHTML = "";
    }
});

//4. Cancelar formulario
const buttonCancelForm = document.querySelector('.js-btn-cancel');

buttonCancelForm.addEventListener("click", (event) => {
    event.preventDefault();
    newFormElement.classList.add("collapsed");
    inputDesc.value = "";
    inputPhoto.value = "";
    inputName.value = "";
});