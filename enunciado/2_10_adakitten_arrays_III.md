# AdaKitten Lección 2.10 Métodos funcionales de arrays

## Ejercicios

### 1. Filtrar por descripción

La aplicación tiene un formulario para realizar búsquedas por descripción y raza. En este ejercicio vamos a modificar la función para filtrar según la descripción de los gatitos utilizando el método de arrays `filter`. Para ello:

1. Modifica el código de la función `filterKitten(ev)`.

```js
function filterKitten(ev) {
  //Modifica el código:
  //Haz un filter sobre el listado de gatitos
  //Vuelve a pintar el listado de gatitos filtrados en el HTML.
}
```

### 2. Filtrar por raza y por descripción

Continúa con el ejercicio anterior y agrega un nuevo filtro utilizando la raza de los gatitos. Para ello:

1. Modifica la función `searchKitten(ev)` creada anteriormente para incluir el nuevo filtro anidado.

```js
function searchKitten(ev) {
  //Completa el código:
  //Haz un filter anidado sobre el listado de gatitos
  const kittenListFiltered = kittenDataList.
         .filter()
         .filter();
  //Vuelve a pintar el listado de gatitos filtrados en el HTML.
  renderKittenList(kittenListFiltered);
}
```
