import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

export default function GameBoard({setIsLoading}) {
  const [pokemonList, setPokemonList] = useState([]);

  function randomNumber() {
    return Math.floor(Math.random() * 897) + 1; //TOTAL POKEMON: 898
  }

  /*useEffect makes sure that its called only once as i pass the emtpty array at the end (dependency) which 
  evaluates as componentDidMount*/
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
      setPokemonList(pokemons);
      setIsLoading(false)
    }
    fetchPokemon();
  },[]);
  /*if i statically create PokemonCard(as in, one by one) it will return undefined, 
  as it will look immediately for a value which is still not fetched. instead, a map of the state that creates each elements ensure that the output is updated once pokemonList is changed . map returns empty when empty, so it wont create undefined elements. as soon as pokemonList values are change, the map executes again with the new values */
  const pokemonCards = pokemonList.map((item) => (
    <PokemonCard id={item.id} name={item.name} url={item.url} key={item.id} />
    ));

    
  return (
    <>
      <div style={{ display: "flex", justifyContent:"center", flexWrap:"wrap" }}>{pokemonCards}</div>
    </>
  );
}
