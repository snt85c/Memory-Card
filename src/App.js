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
    cardNumber:4
  });

  function changeNumberOfCards(value){
setGameLogic({...gameLogic,cardNumber:value})
  }

  function restart(){
    window.location.reload()
  }

  return (
    <div className="App">
      <Loading isLoading={gameLogic.isLoading} />
      {!gameLogic.isLoading && <Header score={gameLogic.score} func={changeNumberOfCards}/>}
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
