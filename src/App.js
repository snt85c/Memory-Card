import "./App.css";
import { useState } from "react";
import GameBoard from "./Components/GameBoard";
import Header from "./Components/Header";
import Loading from "./Components/Loading";

function App() {
  const [gameLogic, setGameLogic] = useState({
    isLoading: true,
    gameOver: false,
    score: 0,
  });

  return (
    <div className="App">
      <Loading isLoading={gameLogic.isLoading} />
      {!gameLogic.isLoading && <Header score={gameLogic.score} />}
      <GameBoard
        setIsLoading={gameLogic.setIsLoading}
        gameLogic={gameLogic}
        setGameLogic={setGameLogic}
      />
    </div>
  );
}

export default App;
