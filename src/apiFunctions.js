import { useEffect, useState } from "react";
import PokemonCard from "./PokmonCard";

export default function ApiFunctions() {
  const [pokemon, setPokemon] = useState({});

  function randomNumber() {
    return Math.floor(Math.random() * 897) + 1; //TOTAL POKEMON: 898
  }
  useEffect(() => {
    async function fetchPokemon() {
      let pokemons = {};
      let random = randomNumber();
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`);
      let pokemon = await response.json();
      pokemons = {
        id: pokemon.id,
        name: pokemon.name,
        url: pokemon.sprites.front_default,
      };
      setPokemon(pokemons);
    }
    fetchPokemon();
  }, []);

  return (
    <>
      <PokemonCard props={pokemon} />
    </>
  );
}
