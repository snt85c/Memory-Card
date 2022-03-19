import { cardBackgroundColor, modifiedName, noDash } from "./utils";

export default function PokemonCard({data, func}) {


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
        resize: "none",
        perspective: "1000px",
        backgroundImage: `linear-gradient( black, ${cardBackgroundColor(data.types[0].type.name)})`,
      }}
      onClick={func}
    >
      <div
        style={{
          padding: "5px 5px 0px 5px ",
          borderRadius: "5px",
          backgroundImage: ` radial-gradient(white,orange)`,
        }}
      >
        <div
          className="cardTitle"
          style={{
            display: "flex",
            fontSize: "100%",
            justifyContent: "space-between",
            resize: "none",
            maxHeight: "20px",
          }}
        >
          {modifiedName(data.name)}
          <div style={{ display: "flex", fontSize: "1.5vh" }}>
            hp:
            <div style={{ fontSize: "2vh" }}>
              {data.stats[0].base_stat}
            </div>
          </div>
        </div>
        <div className="cardImage">
          <img
            src={data.sprites.other["official-artwork"].front_default}
            alt={data.name}
            style={{ objectFit: "contain", width:"130px", height:"130px"}}
          ></img>
        </div>
        <div
          style={{ fontSize: "2vh", textAlign: "left", padding: "1px" }}
          className="cardDescription"
        >
          <div>{data.moves[0] ===undefined? "": data.moves[0].move.name}</div>
          <div>{data.moves[1] === undefined? "": data.moves[1].move.name}</div>
        </div>
      </div>
    </div>
  );
}
