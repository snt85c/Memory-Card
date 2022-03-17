import { useEffect } from "react";

export default function PokemonCard(props) {

  return (
    <>
      <img src={props.url}></img>
      <div>
        {props.id} . {props.name}
      </div>
    </>
  );
}
