export default function PokemonCardImage({ url, name, setIsLoaded }) {
  return (
    <>
      <div>
        <img
          className="cardImage"
          src={url}
          alt={name}
          onLoad={() => setIsLoaded(true)}
        ></img>
      </div>
    </>
  );
}
