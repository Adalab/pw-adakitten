# AdaKitten Lección 2.12 Peticiones al servidor II

## Ejercicios

### 1. Guardar en el local storage

¿Te ha parecido útil el uso del local stoarge? En este ejercicio guarda el listado de gatitos en el local storage, asi cada vez que se inicie la aplicación primero se busque si los datos están almacenados en el local storage y en caso de que no estén, entonces se hará la petición de los datos al servidor. Para ello:

1. Crea una variable para almacenar los gatitos que se encuentren el local storage.

```js
const kittenListStored = JSON.parse(localStorage.getItem('kittensList'));
```

2. Modifica la petición al servidor que hiciste en la sesión anterior, para que solo se realice la petición cuando no hay gatitos en el local storage.

```js
if (kittenListStored) {
  //si existe el listado de gatitos en el local storage
  // vuelve a pintar el listado de gatitos
  //...
  //completa el código...
} else {
  //sino existe el listado de gatitos en el local storage
  //haz la petición al servidor
  fetch(SERVER_URL)
    .then((response) => response.json())
    .then((data) => {
      //guarda el listado obtenido en el local storage.
      //vuelve a pintar el listado de gatitos
      //completa el código...
    })
    .catch((error) => {
      console.error(error);
    });
}
```

### 2. BONUS: Crear un nuevo gatito en el servidor

Y si además agregamos nuestros gatitos en el servidor, para que sean persistentes. Para ello:

1. Prueba la siguiente petición con tu usuario de GitHub: [https://adalab-pw-api.herokuapp.com/api/adakitten/tuusuariodegithub](https://adalab-adakitten-api.herokuapp.com/api/adakitten/tuusuariodegithub). Esta petición es de tipo `post` por lo que utiliza el Postman y espera los siguientes valores a través del body.

```json
{
  "imageURL": "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg",
  "name": "Anastacio",
  "desc": "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!",
  "race": "British Shorthair"
}
```

2. Entonces, modifica la función `saveNewKitten(ev)` para que además de almacenar un nuevo gatito en el listado, envíe esta información al servidor.
3. Dentro de esta función crea una constante para almacenar la info del nuevo gatito. ¿De dónde sale toda la información que enviamos al servidor? la información la obtenemos desde el formulario de la aplicación.

```js
//obtener la información de los gatitos del formulario
const newImageURL = inputPhoto.value;
const newDescription = inputDesc.value;
const newName = inputName.value;

//nuevo objeto con la info del gatito
const newKittenDataObject = {
  imageURL: newImageURL,
  name: newName,
  desc: newDescription,
  race: newRace,
};
```

4. Haz una petición al nuevo servidor con la información obtenida en el paso anterior:

```js
fetch(SERVER_URL + GITHUB_USER, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(newKittenDataObject),
})
  .then((response) => response.json())
  .then((data) => {
    if (data.success) {
      //Completa y/o modifica el código:
      //Agrega el nuevo gatito al listado
      //Guarda el listado actualizado en el local stoarge
      //Visualiza nuevamente el listado de gatitos
      //Limpia los valores de cada input
    } else {
      //muestra un mensaje de error.
    }
  });
```
