# AdaKitten Lección 2.9 Arrays II

## Ejercicios

### 1. Agregar un nuevo gatito al listado

Hasta el momento en la aplicación trabajamos con tres gatitos, en este ejercicio vamos a agregar desde el formulario nuevos gatitos al listado. Para ello:

1. Escucha el evento asociado al evento `click` del botón **Guardar** del formulario.
2. Modifica la función manejadora del evento `addNewKitten(ev)`.
3. Dentro de esta función crea un nuevo objeto `newKittenDataObject` con los valores de cada uno de los inputs. Recuerda que cada gatito tiene una imagen, name, desc y race

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
