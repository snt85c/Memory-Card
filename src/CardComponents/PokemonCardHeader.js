import { modifiedName } from "../utils/utils";
export default function PokemonCardHeader({ name, stats }) {
  return (
    <>
      <div className="cardTitle">
        {modifiedName(name)}
        <div style={{ display: "flex", fontSize: "1.5vh" }}>
          hp:
          <div style={{ fontSize: "2vh" }}>{stats}</div>
        </div>
      </div>
    </>
  );
}
