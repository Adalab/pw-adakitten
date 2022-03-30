# AdaKitten Lección 2.4

### Ejercicios

### 1. Mostrar/ocultar formulario

Hemos aprendido a hacer nuestra web interactiva, es decir, que haya modificaciones también de contenidos o estilos pero en respuesta a la interacción de la usuaria.
En este ejercicio vamos a darle interactividad al icono "+" para que se despliegue u oculte el formulario cuando la usuaria de clic, para ello:

1.  Agrega un evento para cuando damos `click` en el icono "+"
2.  Agrega dentro de este evento el código que muestra u oculta el formulario dependiendo de su estado actual.

> **Nota**:
> Recuerda utilizar el `event.preventDefault()`.

### 2. Validar formulario nuevo gatito

Siempre que estemos haciendo una aplicación, debemos pensar en todas las acciones posibles que puede hacer la usuaria, y validar la mayor cantidad de casos posibles que puedan dar error.

En este ejercicio vamos a validar el caso de que la usuaria le dé clic al botón **Añadir** y no haya rellenado lo valores de la foto, nombre y descripción de manera obligatoria, la raza no es un campo obligatorio a insertar.

Lo primero es agregar el evento clic al botón, para ello:

1. Busca el botón Añadir del formulario `new-form`y agregale la clase `js-btn-add`.
2. Busca el elemento html y guarda el elemento en una variable utilizando el `document.queryselector(".js-btn-add")`.
3. Agrega un evento `click` a este botón.

Luego entonces vamos a validar si los `inputs` tienen valores y sino mostrar un mensaje de error. Para ello:

1. Busca los inputs del formulario y el label para el mensaje de error y añade las clases de js.

```js
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMesageError = document.querySelector('.js-label-error');
```

2. Dentro del evento `click` del botón Añadir obtén los valores almacenados en los inputs y verifica si esos valores son distintos de "";
   a. Si son distintos de "" no hacéis nada.
   b. Si los valores son "" entonces mostrar el mensaje **"Debe rellenar todos los valores"**.

```js
const valueDesc = inputDesc.value;
const valuePhoto = inputPhoto.value;
const valueName = inputName.value;

if (valueDesc === '' || valuePhoto === '' || valueName === '') {
  //completa el código
} else {
  //completa el código
}
```

### 3. Validar formulario búsqueda

En este ejercicio vamos a validar el caso de que la usuaria le dé clic al botón **Buscar** y no haya rellenado alguno de los valores a buscar: raza o descripción.
Los pasos de este ejercicio son muy similares al anterior ¿te atreves a intentarlo con tu pair?

### 4. Cancelar formulario

Haz el código necesario para ocultar la sección del formulario de añadir un nuevo gatito cuando el usuario de clic en el botón cancelar. Recuerda también limpiar los valores de los `inputs`.
