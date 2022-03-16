import { useState } from "react";

export default function ApiFunctions() {
  const [pokemon, setPokemon] = useState({});

  function randomNumber() {
    return Math.floor(Math.random() * 897) + 1; //TOTAL POKEMON: 898
  }
  async function fetchPokemon() {
    let pokemons = [];
    for (let i = 0; i < 5; i++) {
      let random = randomNumber();
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`);  
      let pokemon = await response.json();
      pokemons.push({ 
          id:pokemon.id, 
          name: pokemon.name, 
          url: pokemon.sprites.front_default
         });
    }
    return pokemons;
  }
    fetchPokemon().then((data)=>{setPokemon(data)})


  return (
    <>
      <img src={pokemon[0].url}></img>
      <div>
        {pokemon[0].id} . {pokemon[0].name}
      </div>
    </>
  );
}
