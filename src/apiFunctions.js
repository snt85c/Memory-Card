import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

export default function ApiFunctions() {
  const [pokemon, setPokemon] = useState({});

  function randomNumber() {
    return Math.floor(Math.random() * 897) + 1; //TOTAL POKEMON: 898
  }
  useEffect(() => {
    async function fetchPokemon() {
      const pokemons = [];
      for (let i = 0; i < 5; i++) {
        let random = randomNumber();
        let response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${random}`
        );
        let pokemon = await response.json();
        pokemons.push({
          id: pokemon.id,
          name: pokemon.name,
          url: pokemon.sprites.front_default,
        });
      }
      setPokemon(pokemons);
    }
    fetchPokemon();
  }, []);

  console.log(pokemon);

  return (
    <>
      {/* <img src={pokemon[0].url}></img>
      <img src={pokemon[1].url}></img>
      <img src={pokemon[2].url}></img>
      <img src={pokemon[3].url}></img>
      <img src={pokemon[4].url}></img> */}

      <PokemonCard data={pokemon} />
    </>
  );
}
