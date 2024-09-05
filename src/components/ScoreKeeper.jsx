import { useState } from "react";
import "./ScoreKeeper.css"

// export default function ScoreKeeper () {
//     const [score1, setScore1] = useState(0)
//     const [score2, setScore2] = useState(0)
//     function changeScore1 () {
//         setScore1(score1 => score1+1)
//     }
//     function changeScore2 () {
//         setScore2(score2 => score2+1)
//     }

//     return (
//         <div className="container">
//             <div className="players">
//                 <h1>Player 1: {score1}</h1>
//                 <button onClick={changeScore1}>+1 Player 1</button>
//             </div>
//             <div className="players">
//                 <h1>Player 2: {score2}</h1>
//                 <button onClick={changeScore2}>+1 Player 2</button>
//             </div>
//         </div>
//     )
// }

// export default function ScoreKeeper ({numPlayers}) {
//     const [scores, setScores] = useState({p1Score: 0, p2Score: 0})
//     function changeScore1 () {
//         const newScores = {...scores, p1Score: scores.p1Score + 1};
//         setScores(newScores)
//     }
//     function changeScore2 () {
//         const newScores = {...scores, p2Score: scores.p2Score + 1};
//         setScores(newScores)
//     }

//     return (
//         <div className="container">
//             <div className="players">
//                 <h1>Player 1: {scores.p1Score}</h1>
//                 <button onClick={changeScore1}>+1 Player 1</button>
//             </div>
//             <div className="players">
//                 <h1>Player 2: {scores.p2Score}</h1>
//                 <button onClick={changeScore2}>+1 Player 2</button>
//             </div>
//         </div>
//     )
// }

export default function ScoreKeeper ({numPlayers, target}) {
    const [scores, setScores] = useState(new Array(numPlayers).fill(0))
    function changeScore(index) {
        setScores((prevScores) => {
           return prevScores.map((score, i) => {
                if (index === i) {
                    return score+1
                } else return score
            })
        })
    }
    function reset() {
        setScores(new Array(numPlayers).fill(0))
    }
    return (
        <div className="container">
            <div className="players">
                <h1>Score Keeper</h1>
                <ul>
                    {scores.map((score, index) => {
                       return (
                       <li key={index+1}>Player {index+1}: {score} 
                           <button onClick={() => changeScore(index)}>Add 1</button>
                         {score>=target && "WINNER"}
                       </li>
                       )
                    })}
                    <button onClick={reset}>Reset</button>
                </ul>
            </div>
        </div>
    )


}