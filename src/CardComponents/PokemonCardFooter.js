export default function PokemonCardFooter({data1,data2}){
    return (
        <>
           <div
          style={{ fontSize: "2vh", textAlign: "left", padding: "1px" }}
          className="cardDescription"
        >
          <div>
            {data1 === undefined ? "" : data1.move.name}
          </div>
          <div>
            {data2 === undefined ? "" : data2.move.name}
          </div>
        </div>
        </>
    )
}