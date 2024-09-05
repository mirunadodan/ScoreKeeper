import { useState } from "react";
import "./ScoreKeeper.css";

export default function Players({numPlayers, target}) {
    // let players = [];
    // for (let i=0; i<numPlayers; i++){
    //     players.push(0);
    // }
    let players = new Array(numPlayers).fill(0);
    const [scores, setScore] = useState(players)
    function changeScore(index) {
        console.log(index)
        setScore(prevScore => {
           return prevScore.map((score,i) => {
                if (i === index) {
                    return score+1
                } return score
            })
        })
    }
    function reset(){
        setScore(players)
    }
    return (
        <div>
            <ul>
               {scores.map((score, index) => {
                return (
                    <li key={index}>Player {index+1} : {score}
                    <button onClick={() => changeScore(index)}>Add 1</button>
                    {score === target && "WINNER"}
                    </li>
                )
               })}
               <button onClick={reset}>Reset</button>
            </ul>
        </div>
    )
}