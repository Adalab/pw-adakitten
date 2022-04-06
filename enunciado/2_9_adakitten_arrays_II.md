# AdaKitten Lección 2.9 Arrays II

## Ejercicios

### 1. Conoce a tu nueva pareja y su trabajo

Acabas de conocer a tu nueva pareja de pair programming y lo vamos a aprobechar para trabajar con un código que no has hecho tú, ya que es una práctica bastante común en las empresas.

1. Lo primero que debes hacer es contar a tu nueva pareja qué funcionalidades del Adakitten hiciste con tu pareja anterior y cuáles no.

2. A continuación explícale el código de tu ejercicio.

3. Entre las dos comparad las diferentes soluciones a las que habéis llegado y comentad cuáles os parecen mejor y cuáles peor y por qué.

Ahora tenemos que seguir programando, así que teneís que elegir qué ejercicio vais a desechar y cuál vais a continuar.

También podéis elegir una mezcla de los dos ejercicios. En cualquier caso tenéis que dialogar y ser empáticas para llegar a la mejor solución para ambas.

Además, podéis ver el código resuelto por los profes en el siguiente [repositorio](https://github.com/Adalab/pw-adakitten).

Por último:

1. Cread un nuevo repo en GitHub > Organización de Adalab con el nombre promo-X-module-2-pair-Y-sprint-Z-ada-kitten.
2. Subid vuestro código a este repo...
3. Y a programar!!!

### 2. Agregar un nuevo gatito al listado

Hasta el momento en la aplicación trabajamos con tres gatitos, en este ejercicio vamos a agregar desde el formulario nuevos gatitos al listado. Para ello:

1. Escucha el evento asociado al evento `click` del botón **Añadir** del formulario.
2. Modifica la función manejadora del evento `addNewKitten(ev)`.
3. Dentro de esta función crea un nuevo objeto `newKittenDataObject`. ¿De dónde sale toda la información que enviamos al servidor? La información la obtenemos desde el formulario de la aplicación, con los valores de cada uno de los inputs. Recuerda que cada gatito tiene una imagen, name, desc y race

   ```js
   const newKittenDataObject = {
     //completa el código
   };
   ```

4. Agrega al listado de enlaces con la siguiente línea de código:

   ```js
   kittenDataList.push(newKittenDataObject);
   ```

5. Limpia los valores de los `inputs`
6. Muestra un mensaje al usuario: **"Mola! Un nuevo gatito en Adalab!"**.

   ```js
   labelMesageError.innerHTML = 'Mola! Un nuevo gatito en Adalab!';
   ```

7. Vuelve a pintar el listado de gatitos llamando a la función `renderKittenList(kittenDataList)`
