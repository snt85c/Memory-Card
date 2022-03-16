import { useEffect, useState } from "react";

export default function ApiFunctions() {
  const [pokemon, setPokemon] = useState("");

  function randomNumber() {
    return Math.floor(Math.random() * 897) + 1;
  }

  const pokemonAPI = async function fetchPokemon() {
    const random = randomNumber();
    const url = `https://pokeapi.co/api/v2/pokemon/${random}`; //898
    const response = await fetch(url);
    return await response.json();
  };

  useEffect(() => {
    pokemonAPI().then((data) => {
      setPokemon(data.sprites.front_default);
      console.log(data);
    });
  }, []);

  return (
    <>
      <img src={pokemon} alt="pokemon"></img>
    </>
  );
}
