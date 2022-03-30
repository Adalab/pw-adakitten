# AdaKitten Lección 2.7 Arrays

## Ejercicios

### 1. Crear listado de gatitos

Las listas son muy útiles para almacenar información y luego trabajar sobre ello. En este ejericio vamos a almacenar los datos de todos los gatitos en un listado. Para ello:

1. Crea una variable `kittenDataList` que almacenará los objetos `kittenData_1`, `kittenData_2`, `kittenData_3` que contienen la informacion de cada gatito. Usa las variables con objetos del ejercicio de ayer para crear este array:

```js
// Objeto con la información del primer gatito
const kittenData_1 = {
  image: 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg',
  name: 'Anastacio',
  desc: 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
  race: 'British Shorthair',
};

// Objeto con la información del segundo gatito
const kittenData_2 = {
  /* ... */
};

// Objeto con la información del tercer gatito
const kittenData_3 = {
  /* ... */
};

// Lista con la información de todos los gatitos
const kittenDataList = [kittenData_1, kittenData_2, kittenData_3];
```

2. Crea una nueva función `renderKittenList(kittenDataList)` que reciba como parámetro el listado de gatitos que creamos `kittenDataList`, y que utilice la función `renderKittenList(kittenData)`.

```js
function renderKittenList(kittenDataList) {
  //Completa el código:
  //Vaciamos el innerHTML del <ul> de la página.
  //Iteramos sobre el listado de gatitos
  //Y por cada iteración pintamos un gatito.
  //utilizando la función renderKitten(kittenItem)
}
```

### 2. Filtrar por descripción

En la clase de funciones en el ejercicio **5. Filtrar por descripción** creamos la función `filterKitten(event)` asociada al evento clic del botón buscar para filtrar y mostrar solo aquellos gatitos que la descripción concuerde con la introducida por la usuaria. El resultado debió ser el siguiente:

```js
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
```

Modifica la función anterior para que filtre pero teniendo en cuenta que ahora tenemos un listado de gatitos en la variable `kittenDataList`. Para ello itera sobre este listado y comprueba si cada gatito contiene la descripción que ha incluido la usuaria y entonces pintalo en el HTML.

```js
function filterKitten(event) {
  event.preventDefault();
  const descrSearchText = input_search_desc.value;
  listElement.innerHTML = '';
  for (const kittenItem of kittenDataList) {
    //Completa el código
    //Comprueba si cada gatito contiene la descripción
    //Si la contiene pintamos un gatito
    //utilizando la función renderKitten(kittenItem)
  }
}
```
