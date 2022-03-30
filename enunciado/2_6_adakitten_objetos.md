# AdaKitten Lección 2.6 Objetos

## Ejercicios

### 1. Convertir cada gatito en un objeto

Hemos visto que los obejtos son entidades que agrupan infromación, y que es una manera más limpia y cómoda de trabajar. En este ejerciciio vamos a agrupar las variables de los gatitpos en un objeto. Parar ello:

Crea un objeto `kittenData` para cada uno de los gatitos que contenga toda la información de las variables: `kittenImage`, `kittenName`, `kittenDesc`, `kittenRace`.

```js
//ejemplo de un objeto con la información del primer gatito
const kittenData_1 = {
  image: 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg',
  name: 'Anastacio',
  desc: 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
  race: 'British Shorthair',
};
```

Modifica la función `renderKitten()` para que reciba un objeto como parámetro. .

```js
function renderKitten(kittenData) {
  //modifica la función existente
}
```

Ten en cuenta que también puedes modificar el código y los parámetros de la función `renderRace()`
