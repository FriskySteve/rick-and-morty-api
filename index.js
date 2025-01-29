async function fetchRickAndMortyCharacters() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const character = await response.json();
    return character.results;
  } catch (error) {
    console.log(error);
  }
}

function createCharacterSheet(characterData) {
  const container = document.createElement("div");
  const characterImg = document.createElement("img");
  const characterName = document.createElement("h1");
  const characterStatus = document.createElement("p");
  const characterSpecies = document.createElement("p");
  const charactersContainer = document.querySelector("#characters");

  characterImg.src = characterData.image;
  characterName.textContent = characterData.name;
  characterStatus.textContent = `Status: ${characterData.status}`;
  characterSpecies.textContent = `Gatunek: ${characterData.species}`;
  container.classList.add("sheet");

  container.append(
    characterImg,
    characterName,
    characterStatus,
    characterSpecies
  );
  charactersContainer.appendChild(container);
}

async function main() {
  const characterData = await fetchRickAndMortyCharacters();
  characterData.forEach((character) => {
    createCharacterSheet(character);
    console.log(character);
  });
}

main();
