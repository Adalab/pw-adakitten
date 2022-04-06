//1. Obtener listado de gatitos desde el servidor


const GITHUB_USER = 'adalab_digital';
const SERVER_URL = `https://adalab-api.herokuapp.com/api/kittens/${GITHUB_USER}`;

let kittenDataList = [];

fetch(SERVER_URL, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
}).then(response => response.json())
    .then(data => {
        console.log(data);
        kittenDataList = data.results;
        renderKittenList(kittenDataList);
    }).catch(error => {
        console.error(error);
    });

function renderKittenList(kittenDataList) {
    listElement.innerHTML = "";
    for (const kittenItem of kittenDataList) {
        listElement.innerHTML += renderKitten(kittenItem);
    }
}