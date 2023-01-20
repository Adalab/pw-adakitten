//1. Filtrar por descripción
const searchButton = document.querySelector('.js-button-search');
const input_search_desc = document.querySelector('.js_in_search_desc');
const input_search_race = document.querySelector('.js_in_search_race');

const kittenData_1 = {
    image: "https://dev.adalab.es/gato-siames.webp",
    name: "Anastacio",
    desc: "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.",
    race: "Siamés",
};
const kittenData_2 = {
    image: "https://dev.adalab.es/sphynx-gato.webp",
    name: "Fiona",
    desc: "Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.",
    race: "Sphynx",
};
const kittenData_3 = {
    image: "https://dev.adalab.es/maine-coon-cat.webp",
    name: "Cielo",
    desc: " Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.",
    race: "Maine Coon",
};

const kittenDataList = [kittenData_1, kittenData_2, kittenData_3];

function renderKittenList(kittenDataList) {
    listElement.innerHTML = "";
    for (const kittenItem of kittenDataList) {
        listElement.innerHTML += renderKitten(kittenItem);
    }
}

function filterKitten(event) {
    event.preventDefault();
    const descrSearchText = input_search_desc.value;
    const raceSearchText = input_search_race.value;

    listElement.innerHTML = "";

    const dataKittenFiltered = kittenDataList
        .filter((kitten) => kitten.desc.includes(descrSearchText))
        //2. Filtrar por raza además
        .filter(kitten => kitten.race === raceSearchText)

    renderKittenList(dataKittenFiltered);
}

searchButton.addEventListener("click", filterKitten);