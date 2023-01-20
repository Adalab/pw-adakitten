//1. Guardar en el local storage
const GITHUB_USER = 'adalab';
const SERVER_URL = `https://dev.adalab.es/api/kittens/${GITHUB_USER}`;

let kittenDataList = [];

const kittenListStored = JSON.parse(localStorage.getItem('kittensList'));

if (kittenListStored) {
  //si existe el listado de gatitos en el local storage
  kittenDataList = kittenListStored;
  // vuelve a pintar el listado de gatitos
  renderKittenList(kittenDataList);
} else {
  //sino existe el listado de gatitos en el local storage
  //haz la petición al servidor
  fetch(SERVER_URL, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      kittenDataList = data.results;
      renderKittenList(kittenDataList);
    })
    .catch((error) => {
      console.error(error);
    });
}

//2. BONUS: Crear un nuevo gatito en el servidor
// Día 11.2: Mandar datos nuevo bookmark al servidor

//Función para hacer la petición de guardar un gatito en el servidor
function addNewKittenServer(newKittenDataObject) {
  fetch(`https://dev.adalab.es/api/kittens/${GITHUB_USER}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newKittenDataObject),
  })
    .then((response) => response.json())
    .then((data) => {
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
      addNewKittenServer(newKittenDataObject);
    }
  }
}
