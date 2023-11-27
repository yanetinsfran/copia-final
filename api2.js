/*const apiUrl = "https://rickandmortyapi.com/api/character"

function makeCard (character){
    const {name,status, image} = character;
    const cardsContainer = document.querySelector(".cards-container");
    const title = document.createElement("h5");
    title.textContent = name;

    const characterstatus = document.createElement("p");
    characterstatus.textContent = status;
    if (status =="Alive") characterstatus.style.color = "green";
    else characterstatus.style.color ="gray";

    const characterImagen = document.createElement("img");
    characterImagen.src = image;
    characterImagen.width=200;

    const Card =document.createElement("div");
    Card.appendChild(title);
    Cardard.appendChild(characterImagen);
    Cardard.appendChild(characterstatus);
    Card.style.backgroundColor ="blue";
    
    cardsContainer.appendChild(Card);

}


async function getCharacters (){
    try{
        const response = await fetch(apiUrl);
        const{ results } = await response.json();

        for (let i = 0; i < results.length; i++){
            makeCard (results(i));
        }
    } catch (error){
        console.error(error);

    }
}
getCharacters();
*/
const apiUrl = "https://rickandmortyapi.com/api/character";

function makeCard(character) {
  const { name, status, image } = character;
  const cardsContainer = document.querySelector(".cards-container");
  const title = document.createElement("h5");
  title.textContent = name;

  const characterStatus = document.createElement("p");
  characterStatus.textContent = status;
  if (status === "Alive") characterStatus.style.color = "green";
  else characterStatus.style.color = "gray";

  const characterImage = document.createElement("img");
  characterImage.src = image;
  characterImage.width = 200;

  const card = document.createElement("div");
  card.appendChild(title);
  card.appendChild(characterImage);
  card.appendChild(characterStatus);
  card.style.backgroundColor = "blue";

  cardsContainer.appendChild(card);
}

async function getCharacters() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    data.results.forEach((character) => {
      makeCard(character);
    });
  } catch (error) {
    console.error(error);
  }
}

getCharacters();