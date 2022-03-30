# AdaKitten Lección 2.3

### Ejercicios

#### 1. Búsqueda por descripción

La página contiene una sesión de filtros. En este ejercicio vamos a comenzar a implementar el filtro de búsqueda por descripción. Para ello, modifica el código existente para:

1. Añade la clase `js_in_search_desc` al `input` para buscar por descripción
2. Selecciona el `input` de buscar con el `document.querySelector`

```js
const input_search_desc = document.querySelector('.js_in_search_desc');
```

3. Simula que escribe la usuaria en el `input` de búsqueda.

```js
input_search_desc.value = 'cariñoso';
```

4. Recoge el valor del `input` en una variable.

```js
const descrSearchText = input_search_desc.value;
```

5. Utiliza la función `includes` antes de añadir cada gatito para solo mostrar aquellos gatitos que contengan la palabra introducida por la usuaria:

```js
if( kittenDesc1.includes(descrSearchText) ) {
 //Completa el código
}

if( kittenDesc2.includes(descrSearchText) ) {
 //Completa el código
}

if( kittenDesc3.includes(descrSearchText) ) {
 //Completa el código
}
    ....
```

6. ¿Qué pasa si modifico el valor del `input` a vacío? ¿Que muestra la página ahora?

```js
input_search_desc.value = '';
```

#### 2. Mostrar/ocultar el formulario añadir

Hemos visto que el formulario para añadir un nuevo gatito es un panel lateral que se muestra y oculta. En este ejercicio vamos a seguir modificando esta funcionalidad.

En la cabecera de nuestra página tenemos el icono "+" que tiene como función mostrar el formulario para añadir un nuevo gatito.

Hoy solamente jugaremos a mostrar/ocultar dicho formulario cada vez que levantemos la página (a darle interacción a ese botón aprenderemos en próximas clases). Para ello:

1. Busca la sección `new-form` que contiene el formulario y elimina la clase `collapsed` a esta etiqueta. ¿Has visto como en la página se muestra el formulario para añadir gatitios?

2. Añade nuevamente la clase de la etiqueta anterior a `collapsed`. ¿La página cambia nuevamente? ¿Entiendes lo que está sucediendo?

3. Cambia tu fichero `main.js` para verificar que clase tiene esta sección para agregarla/quitarla, por ejemplo si la sección incluye la clase `collapsed` se la quitamos y viceversa.

¿Y por qué hacemos esto? Estamos dando los primeros pasos para mostrar/ocultar esta sección cuando la usuaria dé clic en el icono "+" (lo haremos en próximas clases, es normal que ahora pueda parecer un poco confuso). Para usar estos cambios utiliza los métodos del `classList`.

Para resolverlo:

1.  En la sección del listado de datos del html agrega la clase `.js-new-form`.
2.  Busca el elemento html y guarda el elemento en una variable utilizando el `document.queryselector(".js-new-form")`.
3.  Utiliza un condicional para comprobar si la sección contiene la clase `collapsed`, y si es asi eliminarla/agregarla:

```js
if (formElement.classList.contains('collapsed')) {
  //completa el código
} else {
  //completa el código
}
```

4. Prueba los dos posibles cambios en la página, elimina la clase `collapsed` manualmente y observa que sucede.

#### 3. Bonus: No se ha especificado la raza, ¿qué se muestra entonces?

Valida la información de las razas, si el gatito no tiene la raza especificada mostraremos el mensaje **No se ha especificado la raza**. Para ello:

1. Crea una variable para almacenar el resultado de la comprobación:

```js
let html = '';
```

2. Verifica si la raza de cada gatito tienen algún valor, y en dependencia del resultado de la comprobación muestra un mensaje o la raza si existe.

```js
if (kittenRace1 === "")) {
  html = `No se ha especificado la raza`;
} else {
  html = race;
}
```

3. Piensa donde debemos hacer esta comprobación, ¿antes de pintar en el HTML?
