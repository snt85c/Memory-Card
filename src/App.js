import "./App.css";
import { useState } from "react";
import GameBoard from "./Components/GameBoard";
import Header from "./Components/Header";
import Loading from "./Components/Loading";
import Gameover from "./Components/Gameover";

function App() {
  const [gameLogic, setGameLogic] = useState({
    isLoading: true,
    isGameover: false,
    isWinner:false,
    score: 0,
  });


  function restart(){
    window.location.reload()
  }

  console.log(gameLogic)

  return (
    <div className="App">
      <Loading isLoading={gameLogic.isLoading} />
      {!gameLogic.isLoading && <Header score={gameLogic.score} />}
      <GameBoard
        setIsLoading={gameLogic.setIsLoading}
        gameLogic={gameLogic}
        setGameLogic={setGameLogic}
      />
      <Gameover state={gameLogic} restart={restart}/>
    </div>
  );
}

export default App;
