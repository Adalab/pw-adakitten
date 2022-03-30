# AdaKitten Lección 2.11 Peticiones al servidor I

## Ejercicios

### 1. Obtener listado de gatitos desde el servidor

Hasta el momento trabajamos con la información de gatitos en nuestra página, en este ejercicio vamos
a obtener la lista de gatitos desde un servidor. El servidor en cuestión devuelve un listado en formato `json`con la información de los gatitos de un usuario. El formato de la respuesta de una petición es el siguiente, cada elemento contiene un id, owner, image, name, desc y race:

```json
    {
    "id": "16396904232462016",
    "owner": "adalabdigital",
    "image": "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg",
    "name": "Anastacio",
    "desc": "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!",
    "race": "British Shorthair",
    },
```

Para que la aplicación incorpore una petición al servidor, haz lo siguiente:

1. Prueba la siguiente petición en tu navegador con tu usuario de GitHub: [https://adalab-pw-api.herokuapp.com/api/adakitten/tuusuariodegithub](https://adalab-pw-api.herokuapp.com/api/adakitten/tuusuariodegithub) y observa, entiende y analiza como se devuelve la información.
2. Crea variables para almacenar la información del usuario de github y la url del endpoint:

```js
const GITHUB_USER = 'tu_usuario_de_github_aqui';
const SERVER_URL = `https://adalab-pw-api.herokuapp.com/api/adakitten/`;
```

3. Haz un `fetch` para obtener el listado los gatitos.

```js
fetch(SERVER_URL + GITHUB_USER, {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
}).then();
//Completa el código;
```

3. Guarda la respuesta obtenida en el paso anterior dentro de la variable que contiene el listado de gatitos: `kittenDataList`
4. Verifica que se muestre el listado correctamente, ¿ha sido necesario modificar algo más?
