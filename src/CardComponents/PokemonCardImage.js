export default function PokemonCardImage({url,name}){
    return(
        <>

<div className="cardImage">
          <img
            src={url}
            alt={name}
            style={{ objectFit: "contain", width: "130px", height: "130px" }}
          ></img>
        </div>
        </>
    )
}