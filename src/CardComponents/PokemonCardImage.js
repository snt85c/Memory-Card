export default function PokemonCardImage({url,name, setIsLoaded}){


    return(
        <>

<div className="cardImage">
          <img
            src={url}
            alt={name}
            style={{ display:"flex",objectFit: "contain", width: "130px", height: "130px" }}
            onLoad={()=>setIsLoaded(true)}
          ></img>
        </div>
        </>
    )
}