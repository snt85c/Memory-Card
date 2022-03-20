import { useEffect, useState } from "react";
import PokemonCard from "../CardComponents/PokemonCard";
import {randomNumber, noDash, shuffle} from "../utils/utils";

export default function GameBoard({ gameLogic, setGameLogic}) {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonNamesList, setPokemonNameList] = useState([])
  const CARD_NUMBER = 5;

  function handleClick(e){
    const name = e.currentTarget.id
    if(!gameLogic.gameOver){
      if(pokemonNamesList.length === 1){
        setPokemonNameList([])
        setGameLogic({...gameLogic,isGameover:true,isWinner:true, score: gameLogic.score+1})
      }
      else if(!pokemonNamesList.includes(name)){
        setPokemonNameList([])
        setGameLogic({...gameLogic,isGameover:true})

      } else {
        setPokemonNameList(pokemonNamesList.filter((card)=>{
          return card !== name
        }))
        setPokemonList(shuffle(pokemonList))
        setGameLogic({...gameLogic, score: gameLogic.score+1})
      }
    }
  }

  useEffect(() => {
    async function fetchPokemon() {
      const pokemons = [];
      const pokemonNames = []
      for (let i = 0; i < CARD_NUMBER; i++) {
        let random = randomNumber();
        let response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${random}`
        );
        let pokemon = await response.json();
        pokemons.push(pokemon);
        console.log(pokemon)
        pokemonNames.push(noDash(pokemon.name))
      }
      setPokemonList(pokemons);
      setPokemonNameList(pokemonNames)
      setGameLogic({...gameLogic, isLoading:false})
    }
    fetchPokemon();
  },[]);

  const pokemonCards = pokemonList.map((item) => (
    <PokemonCard data={item} key={item.id} func={handleClick} />
    ));
  return (
    <>
      <div style={{ display: "flex", justifyContent:"center", flexWrap:"wrap", height:"70%", marginTop:"5%", backgroundColor:"red" }}>{pokemonCards}</div>
    </>
  );
}
