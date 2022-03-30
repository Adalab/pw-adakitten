# AdaKitten: Lección 2.2

### Ejercicios

#### 1. Trabajar con variables e interpolarlas.

Las variables juegan un papel fundamental en la programación, para guardar información que podemos reutilizar en varias partes de nuestro código. El objetivo de este ejercicio es guardar los datos de cada gatito en una variable. Para ello:

1. En tu fichero `main.js` crea las variables necesarias para almacenar la información de cada gatito (recuerda que tenemos tres gatitos de momento):

- Una variable para la URL de la foto.
- Una variable para el nombre.
- Una variable para la descripción.
- Una variable para la raza.

Por ejemplo:

```js
const kittenImage = "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg";
const kittenName = "Anastacio";
const kittenDesc =
  "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";
const kittenRace = "British Shorthair";
```

2. Partiendo del código que creaste en la clase anterior en el ejercicio 4, interpola los variables creadas anteriormente en variable con el `li ` de cada gatito.

Por ejemplo, en el ejercicio 4 de la clase anterior te debió quedar algo asi para el primer gatito:

```js
const kittenOne = `<li class="card">
  <article>
    <img class="card_img src="https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg" alt="gatito" />
    <h3 class="card_title">Anastacio</h3>
    <h4 class="card_race">British Shorthair</h3>
    <p class="card_description">
    Ruiseño, juguetón, le guta estar tranquilo y que nadie le
    moleste. Es una maravilla acariciarle!
    </p>
  </article>
</li>`;
```

Ahora vamos a modificar este código para usar las variables que hemos creado en la primera parte del ejercicio, interpolando. De manera que en `kittenOne` donde dice Anastacio, esté la nueva variable `kittenName`, haz lo mismo para toda las variables.
¿Entiendes la utilidad de utilizar variables para almacenar información?

#### 2. Bonus: Convertir cadenas de carácteres

¿Serías capaz de buscar métodos de `string` para pasar a mayúsculas el nombre de los gatitos que está en la variable `kittenName`?

#### 3. Bonus: Reemplaza contenido

¿Serías capaz de quitar el `https://` del principio de la dirección en el contenido del enlace usando otro método de `string`? No lo quites en el html en la propiedad `href`.
