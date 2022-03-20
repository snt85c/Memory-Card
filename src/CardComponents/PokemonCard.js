import { cardBackgroundColor, noDash } from "../utils/utils";
import PokemonCardHeader from "./PokemonCardHeader";
import PokemonCardImage from "./PokemonCardImage";
import PokemonCardFooter from "./PokemonCardFooter";
import { useState } from "react";

export default function PokemonCard({ data, func }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className="card cardPop"
      id={noDash(data.name)}
      style={{
        display: isLoaded ? "flex" : "none",
        backgroundImage: `linear-gradient( #024, ${cardBackgroundColor(
          data.types[0].type.name
        )})`,
      }}
      onClick={func}
    >
      <div className="cardMargins">
        <PokemonCardHeader name={data.name} stats={data.stats[0].base_stat} />
        <PokemonCardImage
          url={data.sprites.other["official-artwork"].front_default}
          name={data.name}
          setIsLoaded={setIsLoaded}
        />
        <PokemonCardFooter data1={data.moves[0]} data2={data.moves[1]} />
      </div>
    </div>
  );
}
