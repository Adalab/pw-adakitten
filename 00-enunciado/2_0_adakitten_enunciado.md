# Ejercicio para el pair programming

Hemos creado este ejercicio para que lo hagáis durante la hora de pair programming entre tu compañera y tú. Este ejercicio es incremental, es decir, cada día vamos a ir añadiendo las nuevas funcionalidades que hemos aprendido.

- En estos materiales encontraréis el enunciado de las tareas que debes hacer cada día.
- Aquí os enseñamos trucos y buenas prácticas.
- Cuando a mitad de módulo cambies de pareja tendrás que seguir trabajando sobre tu ejercicio o el de tu nueva pareja, o descargar el ejercicio que les den los profes.

# Aplicación AdaKitten 🐈

¿A quién no le gustan los gatitos 🐈? Las mascotas forman parte de nuestra vida, son nuestra familia, compañeros de trabajo, y seguro que ahora mismo muchas de nosotras tenemos uno o varios a nuestro lado.
Os proponemos trabajar en AdaKitten🐈, una aplicación donde guardamos la información de los gatitos que pasan por Adalab. ¿Te apuntas a programar desde cero esta aplicación?

### Descripción de la aplicación

El objetivo de la aplicación es guardar información general sobre gatos, y hemos elegido hacerlo con los gatos de las Adalabers. Esta aplicación es replicable y extensible a cualquier temática: perros, listado de productos, contactos.

![Adacats Aplicación](../assets/images/adakitten/adakitten_template.png)

La aplicación está compuesta por una única página que contiene:

1. Una cabecera que contiene una sección para buscar por un nombre, raza o alguna característica.

2. La sección principal es un listado en forma de tarjetas donde se muestra la información de los gatitos: foto, nombre, raza, y una descripción para contar lo que hace único a cada gato.

3. Por último, podemos añadir nuevos gatitos pulsando sobre el botón "+" que mostrará un formulario para rellenar los datos.

¡Al turrón (a la tortilla de patatas también sirve)!

# AdaKitten Lección 2.1

### Ejercicios

#### 1. Crear un proyecto nuevo

Empezaremos lógicamente por crear un proyecto nuevo, para lo cual:

1. Crea un repositorio en GitHub llamado `promo-X-module-2-pair-Y-sprint-Z-ada-kitten`.
   - Cambia la `X` por tu promo, la `Y` por tu número de pareja y la `Z` por el número del sprint.
   - Crea el repo en **la organización de Adalab**.
   - Clónalo en vuestros equipos.

#### 2. Entiende el código html y css del proyecto

Para ahorraros tiempo os hemos preparado el HTML y el CSS del ejercicio. De esta forma, solo tenéis que programar en JS. Podeís descargarlo desde este repo: [https://github.com/Adalab/ejercicios-de-los-materiales/tree/main/modulo-2-adakitten](https://github.com/Adalab/ejercicios-de-los-materiales/tree/main/modulo-2-adakitten)

Un resumen del código html:

- Está compuesto por un `header`, `main` y `footer`
- El html está dividido en diferentes secciones para cada parte del proyecto.
- En el `header` hay una sección para la cabecera que contiene el botón añadir.
- En el `main` tenemos las sigueintes secciones:
  - sección `new-form` para el formulario y los inputs para agregar un gatito.
  - sección `about-us` para el hero de la página con la clase .
  - sección `search` para el formulario de búsqueda
  - sección `data` para el listado de los gatitos

En este ejercicio tienes que :

1. Levanta la página utilizando el Live Server, e inspecciona con el DevTools la estructura del HTML y las clases aplicadas a cada elemento.
2. Crea la estructura y el fichero `main.js` en tu proyecto. No olvides definir en este el modo `use strict`.

#### 3. Modificar clases CSS desde JS

Para trabajar con clases, los elementos ofrecen una propiedad llamada `classList`. Esta contiene una serie de métodos que nos permitirán, añadir o eliminar una clase o comprobar si el elemento contiene una clase o no.

En este ejercicio vamos a probar como mostrar el formulario para añadir un nuevo gatito. Para ello busca en el html la sección que contiene el formulario y elimina la clase `colapsed`. Puedes seguir los siguientes pasos:

1. En la sección de formulario del html agrega la clase `js-new-form`.
2. Con `document.querySelector('.js-new-form')` obtenemos el formulario que hayamos escrito en nuestro HTML.
3. Utiliza la propiedad `classList.remove("collapsed")` para hacer visible el formulario;

El resultado debe ser el siguiente:
![Formulario para crear un nuevo enlace](../assets/images/adakitten/new_form.png)

#### 4. Guarda la información en variables

Cuando hablamos de modificar el contenido de elementos desde HTML, utilizamos la propiedad innerHTML. En este ejercicio vamos a añadir la información de los gatitos que está en html desde Javascript. Para ello podemos seguir los siguientes pasos,

1.  En la sección del listado de datos del html agrega la clase `js-list`.
2.  Busca el elemento html y guarda el elemento en una variable utilizando el `document.queryselector(".js-list")`.
3.  Copia el código de cada `li` del html dentro de una variable. Por ejemplo:

```js
/* Agregar el código del li desde HTMl 
Repetir este proceso por cada gatito */
const kittenOne = `<li class="card">
<article>
  <img
    class="card_img"
    src="https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg"
    alt="gatito"
  />
  <h3 class="card_title">Anastacio</h3>
  <p class="card_description">
    Ruiseño, juguetón, le guta estar tranquilo y que nadie le
    moleste. Es una maravilla acariciarle!
  </p>
</article>
</li>`;
```

Ten en cuenta que ya no es necesario que estos `li` estén en el html, por lo que puedes eliminar este bloque de código de la sección del listado.

4. Añade cada variable al html utilizando propiedad `innerHTML`.
