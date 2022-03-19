export default function Scoreboard({score}){
    return(
        <div className="scoreboard"style={{backgroundColor:"black", display:"flex", justifyContent:"space-between", color:"white"}}>Score: {score}</div>
    )
}