export default function PokemonCard({ url, id, name }) {
  return (
    <div
      className="card"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "5px",
        width: "120px",
        height: "170px",
        margin: "20px",
        border: "2px solid brown",
        borderRadius: "10px",
        boxShadow: " 5px 5px 5px black",
        backgroundColor: "yellow",
      }}
    >
      <img src={url} alt={name} style={{ objectFit: "contain" }}></img>
      <div>
        {id}. {name}
      </div>
    </div>
  );
}
