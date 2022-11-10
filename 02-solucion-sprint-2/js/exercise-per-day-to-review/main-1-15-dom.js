//1. Cambiar a DOM Avanzado

/*Para practicar esta última lección puedes cambiar el innerHTML de las funciones renderKitten() por sentencias de creación de elementos.*/

function renderKitten(kittenData) {
  const kitten = `<li class="card">
    <article>
      <img
        class="card_img"
        src=${kittenData.image}
        alt="gatito"
      />
      <h3 class="card_title">${kittenData.name}</h3>
      <h3 class="card_race">${kittenData.race}</h3>
      <p class="card_description">
      ${kittenData.desc}
      </p>
    </article>
    </li>`;

  const liElement = document.createElement('li');
  liElement.classList.add('card');

  const articleElement = document.createElement('article');
  liElement.appendChild(articleElement);

  const imgElement = document.createElement('img');
  imgElement.classList.add('card_img');
  imgElement.src = kittenData.url;
  articleElement.appendChild(imgElement);

  const h3Title = document.createElement('h3');
  h3Title.classList.add('card_title');
  articleElement.appendChild(h3Title);

  const textForTitle = document.createTextNode(kittenData.name);
  h3Title.appendChild(textForTitle);

  const h3Race = document.createElement('h3');
  h3Race.classList.add('card_race');
  articleElement.appendChild(h3Race);

  const textForRace = document.createTextNode(kittenData.race);
  h3Race.appendChild(textForRace);

  const pDesc = document.createElement('desc');
  pDesc.classList.add('card_description');
  articleElement.appendChild(pDesc);

  const textForDesc = document.createTextNode(kittenData.desc);
  pDesc.appendChild(textForDesc);

  return liElement;
}

function renderKittenList(kittenDataList) {
  listElement.innerHTML = '';
  for (const kittenItem of kittenDataList) {
    const newLiItem = renderKitten(kittenItem);
    listElement.appendChild(newLiItem);
  }
}
