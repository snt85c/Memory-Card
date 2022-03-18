import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import {randomNumber} from "./utils";

export default function GameBoard({setIsLoading}) {
  const [pokemonList, setPokemonList] = useState([]);
  useEffect(() => {
    async function fetchPokemon() {
      const pokemons = [];
      for (let i = 0; i < 8; i++) {
        let random = randomNumber();
        let response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${random}`
        );
        let pokemon = await response.json();
        pokemons.push(pokemon);
        console.log(pokemon)
      }
      setPokemonList(pokemons);
      setIsLoading(false)
    }
    fetchPokemon();
  },[]);

  const pokemonCards = pokemonList.map((item) => (
    <PokemonCard data={item} key={item.id} />
    ));
  return (
    <>
      <div style={{ display: "flex", justifyContent:"center", flexWrap:"wrap" }}>{pokemonCards}</div>
    </>
  );
}
