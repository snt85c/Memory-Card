import pokeball from "../img/pokeball.png";
import loading from "../img/Loading.png"

export default function Loading({ isLoading }) {
  return (
    <>
      {isLoading && (
        <div className="loader">
          <img
            src={pokeball}
            className="spinner"
            alt=""
          ></img>
          <img className="loadingtext" src={loading} alt=""></img>
        </div>
      )}
    </>
  );
}
