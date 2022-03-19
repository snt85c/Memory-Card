import MemoryCard from "../img/Memory-Card.png"
import Scoreboard from "./Scoreboard"
export default function Header({score}){

    return(
        <div className="header">
            <img className = "headerLogo" src={MemoryCard} style={{width:"30vw", height:"30vh", objectFit:"contain"}}alt=""></img>
            <Scoreboard score={score}/>
        </div>
    )
}