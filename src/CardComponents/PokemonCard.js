import { cardBackgroundColor, noDash } from "../utils/utils";
import PokemonCardHeader from "./PokemonCardHeader";
import PokemonCardImage from "./PokemonCardImage";
import PokemonCardFooter from "./PokemonCardFooter";

export default function PokemonCard({ data, func }) {
  return (
    <div
      className="card"
      id={noDash(data.name)}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "5px",
        width: "140px",
        height: "200px",
        margin: "20px",
        border: "2px solid brown",
        borderRadius: "10px",
        boxShadow: " 5px 5px 5px black",
        backgroundImage: `linear-gradient( black, ${cardBackgroundColor(
          data.types[0].type.name
        )})`,
      }}
      onClick={func}
    >
      <div className="cardMargins"
        style={{
          padding: "5px 5px 0px 5px ",
          borderRadius: "5px",
          backgroundImage: ` radial-gradient(white,orange)`,
        }}
      >
        <PokemonCardHeader name={data.name} stats={data.stats[0].base_stat} />
        <PokemonCardImage
          url={data.sprites.other["official-artwork"].front_default}
          name={data.name}
        />
        <PokemonCardFooter data1={data.moves[0]} data2={data.moves[1]} />
      </div>
    </div>
  );
}
