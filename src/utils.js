export function randomNumber() {
  return Math.floor(Math.random() * 897) + 1; //TOTAL POKEMON: 898
}

export function modifiedName(value) {
  const split = value.split("-");
  return split[0].substring(0, 1).toUpperCase() + split[0].substring(1);
}

export function noDash(value) {
  const split = value.split("-");
  return split[0];
}

export function cardBackgroundColor(value) {
  switch (value) {
    case "rock":
      return "grey";
    case "water":
      return "blue";
    case "psychic":
      return "purple";
    case "ground":
      return "brown";
    case "grass":
      return "green";
    case "ice":
      return "rgb(51, 204, 255) ";
    case "electric":
      return "yellow";
    case "steel":
      return "grey";
    case "ghost":
      return "rgb(204, 0, 204)";
    case "dark":
      return "#003366";
    case "fire":
      return "orange";
    default:
      return "white";
  }
}

export function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
