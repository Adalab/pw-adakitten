# AdaKitten Lección 2.5 Funciones

## Ejercicios

#### 1. Mostrar/ocultar el formulario nuevo gatito

Crea dos funciones para mostrar u ocultar el formulario para añadir un nuevo gatito. Para ello, vamos a reutilizar parte del código que hemos ido trabajando en clases anteriores.

1. Declara una función llamada `showNewCatForm` para mostrar el formulario y otra llamada `hideNewCatForm` para ocultar el formulario, que se ejecutarán cuando demos clic en el botón "+" de la aplicación.
2. Piensa si estas funciones: ¿Necesitan recibir parámetros? ¿Devolverán algún valor?
3. Reutiliza el código ya programado para mostrar y ocultar el formulario y muevelo dentro de las funciones.

```js
function showNewCatForm() {
  newFormElement.classList.remove('collapsed');
}
function hideNewCatForm() {
  newFormElement.classList.add('collapsed');
}
```

4. Piensa: ¿Dónde vamos a utilizar estas funciones? ¿Estaría correcto utilizarlo dentro del evento `click` del botón?
5. Como ya hemos aprendido a trabajar con funciones vamos a modificar como usamos los eventos, entonces primero declaro mi evento y la función manejadora:

```js
linkNewFormElememt.addEventListener('click', handleClickNewCatForm);
```

6. Declaro la función manejadora y utilizo las funciones creadas anteriormente:

```js
function handleClickNewCatForm(event) {
  event.preventDefault();
  //completa el código
}
```

#### 2. Crear el gatito en HTML

Si observamos nuestro código `js` vemos que el código para crear el listado de gatitos, la creación de cada elemento es un código repetitivo, entonces ¿se puede hacer una función que se utilice cada vez que se necesite crear un gatito?

Crea una función que se llame `renderKitten()` que reciba como parámetros todos los datos que tenemos de un gatito (URL, descripción, nombre y raza). Esta función devuelve un `string` con todo el HTML que representa al gatito en la página.

En este ejercicio necesitas modificar el código que has trabajado en lecciones anteriores. Para ello:

1. Crea la función `renderKitten()

```js
function renderKitten(url, desc, name, race) {
  //completa el código
}
```

2. ¿Cómo podrías usar esta función para generar y poner en la página el HTML de cada gatito que tenemos? Utiliza cada vez que necesites la función para mostrar el listado de gatitos.

#### 3. Adicionar nuevo gatito

Haz una nueva función `addNewKitten(event)` asociada al evento clic del botón añadir para extraer el código que realizamos en la clase de ayer para validar el formulario de una nuevo gatito.

```js
//modifica el evento para cumplir una función manejadora
buttonAdd.addEventListener('click', addNewKitten);

function addNewKitten(event) {
  //mueve el código que está dentro del evento
}
```

#### 4. Cancelar nuevo gatito

Haz una nueva función `cancelNewKitten(event)` asociada al evento clic del botón cancelar la creación de un nuevo gatito.

- Si ayer completaste el **ejercicio 4 Cancelar formulario"** puedes modificar el código para incluir la función manejadora del evento.
- Sino haz el código necesario dentro de esta función para ocultar la sección del formulario de añadir un nuevo gatito cuando el usuario de clic en el botón cancelar. Recuerda también limpiar los valores de los `inputs`.

```js
const buttonCancelForm = document.querySelector('.js-btn-cancel');
buttonAdd.addEventListener('click', cancelNewKitten);

function cancelNewKitten(event) {
  //completa o mueve el código para cancelar la creación de un nuevo gatito.
}
```

#### 5. Filtrar por descripción

Haz una nueva función `filterKitten(event)` asociada al evento clic del botón buscar para filtrar y mostrar solo aquellos gatitos que la descripción concuerde con la introducida por la usuaria. Para ello:

1. Escucha el evento `clic` asociado al botón buscar:

```js
const buttonSearch = document.querySelector('.js-button-search');
buttonSearch.addEventListener('click', filterKitten);
```

3. Obtén los valores que ha escrito la usuaria en el input de descripción, para ello utiliza el mismo código que hemos realizado en otras clases, solo elimina la línea de código `input_search_desc.value = 'risueño'; `:

```js
const input_search_desc = document.querySelector('.js_in_search_desc');
const descrSearchText = input_search_desc.value;
```

4. Haz la función manejadora asociada al evento anterior:

```js
function filterKitten(event) {
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

#### 6. Mostrar la raza o no

Crea una función para comprobar si la raza de un gatito ha sido especificada, y en caso de que no mostrar el mensaje **No se ha especificado la raza**. Para ello:

1.  Crear una función llamada `renderRace()`.

¿Necesita parámetros esta función? Si, le pasamos como parámetro el valor de la raza.
¿Nos devuelve algo la función? Si, nos retorna el código HTML en un string.

- Si recibe una palabra en el primer parámetro devolverá un HTML con la etiqueta `<h3>`.

```html
<h3 class="card_race">race</h3>
```

- Si recibe un string vacío como parámetros devolverá código HTML, pero esta vez será un texto diciéndo que no se ha especificado la raza :

```html
<p class="card_race">No se ha especificado la raza</p>
```

Puedes probar esta función en la consola de las DevTools y ver qué HTML te devuelve en cada caso.

**BONUS:** Puedes "perfeccionar" la función para que tenga en cuenta si es un texto o un string vacío o undefined.

#### 7. BONUS: Funciones dentro de funciones

Una de las ventajas de programar con funciones, es que podemos utilizar esas funciones en cualquier parte de nuestro código, incluso dentro de otras funciones.

¿Os parece si utilizamos las función de `renderRace()` dentro de `renderKitten()`? Para ello, modifica la función `renderKitten()` del ejercicio 2 para incluya la función `renderRace()` que en dependencia si existe la raza o no muestra un html u otro.
