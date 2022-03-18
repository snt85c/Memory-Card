import pokeball from "./pokeball.png";

export default function Loading({ isLoading }) {
  return (
    <>
      {isLoading && (
            <img src={pokeball} className="loader" alt="" style={{position:"absolute", left:"40vw", top:"30vh"}}></img>
      )}
    </>
  );
}
