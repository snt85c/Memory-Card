//gets a random number between 1 and 898 (to fetch a random pokemon from the API)
export function randomNumber() {
  return Math.floor(Math.random() * 897) + 1; //TOTAL POKEMON: 898
}

//the API has names all lower case and sometimes there are added info after a dash character. the function removes everything after the dash and returns the name with the first letter capitalized(used to display the card name properly)
export function modifiedName(value) {
  const split = value.split("-");
  return split[0].substring(0, 1).toUpperCase() + split[0].substring(1);
}

//when clicking the card, we compare the names on an array with the card id, which is the name, thi function removes the text after the dash (-) in data.name from the API 
export function noDash(value) {
  const split = value.split("-");
  return split[0];
}


//each card is colored depending on the pokemon type.
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

//after each correct guess, shuffle the array to mix the cards
export function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
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
