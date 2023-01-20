//1. Agregar un nuevo gatito al listado

const buttonAdd = document.querySelector('.js-btn-add');
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const inputRace = document.querySelector('.js-input-race');
const labelMesageError = document.querySelector('.js-label-error');

const kittenData_1 = {
  image: "https://dev.adalab.es/gato-siames.webp",
  name: "Anastacio",
  desc: "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.",
  race: "Siamés",
};
const kittenData_2 = {
  image: "https://dev.adalab.es/sphynx-gato.webp",
  name: "Fiona",
  desc: "Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.",
  race: "Sphynx",
};
const kittenData_3 = {
  image: "https://dev.adalab.es/maine-coon-cat.webp",
  name: "Cielo",
  desc: " Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.",
  race: "Maine Coon",
};
const kittenDataList = [kittenData_1, kittenData_2, kittenData_3];

function renderKittenList(kittenDataList) {
  listElement.innerHTML = '';
  for (const kittenItem of kittenDataList) {
    listElement.innerHTML += renderKitten(kittenItem);
  }
}

buttonAdd.addEventListener('click', addNewKitten);
function addNewKitten(event) {
  event.preventDefault();
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  const valueRace = inputRace.value;

  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
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
      //Agregar un nuevo gatito al listado
      kittenDataList.push(newKittenDataObject);
      //Limpiar los valores del gatito
      inputDesc.value = '';
      inputPhoto.value = '';
      inputName.value = '';
      inputRace.value = '';

      //Mostrar mensaje de que se ha creado correctamente
      labelMesageError.innerHTML = 'Mola! Un nuevo gatito en Adalab!';

      //vuelve a pintar el listado de gatitos
      renderKittenList(kittenDataList);
    }
  }
}
