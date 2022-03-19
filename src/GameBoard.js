import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import {randomNumber, noDash, shuffle} from "./utils";

export default function GameBoard({setIsLoading}) {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonNamesList, setPokemonNameList] = useState([])
  const [gameOver, setGameOver] = useState(false);

  function handleClick(e){
    const name = e.currentTarget.id
    if(!gameOver){
      if(pokemonNamesList.length === 1){
        console.log("winner")
        setPokemonNameList([])
        setGameOver(true)
      }
      if(!pokemonNamesList.includes(name)){
        console.log("gameover")
        setPokemonNameList([])
        setGameOver(true)
      } else {
        setPokemonNameList(pokemonNamesList.filter((card)=>{
          return card !== name
        }))
        setPokemonList(shuffle(pokemonList))
        console.log(e.currentTarget.id)
        console.log(pokemonNamesList)
      }
    }
  }
  useEffect(() => {
    async function fetchPokemon() {
      const pokemons = [];
      const pokemonNames = []
      for (let i = 0; i < 8; i++) {
        let random = randomNumber();
        let response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${random}`
        );
        let pokemon = await response.json();
        pokemons.push(pokemon);
        console.log(pokemon.name)
        pokemonNames.push(noDash(pokemon.name))
      }
      console.log(pokemonNames)
      setPokemonList(pokemons);
      setPokemonNameList(pokemonNames)
      setIsLoading(false)
    }
    fetchPokemon();
  },[]);

  const pokemonCards = pokemonList.map((item) => (
    <PokemonCard data={item} key={item.id} func={handleClick} />
    ));
  return (
    <>
      <div style={{ display: "flex", justifyContent:"center", flexWrap:"wrap" }}>{pokemonCards}</div>
    </>
  );
}
