import winner from "../img/Winner.png"
import gameover from "../img/Game-Over.png"
export default function Gameover({state, restart}){

    return(
        <div className="gameover"style={{display:state.isGameover?"flex":"none", flexDirection:"column"}}>
            <img src={state.isWinner?winner:gameover} alt=""></img>
            <div className="gameoverScore">Score: {state.score}</div>
            <button onClick={restart}>Restart?</button>
        </div>
    )
}