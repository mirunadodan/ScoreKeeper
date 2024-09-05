import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function EmojiClicker({emojiList}) {
    const [emojis, setEmoji] = useState([{id: uuid(), emoji:"🙃"}])
    function addEmoji() {
        const i = Math.floor(Math.random()*emojiList.length)+1
        setEmoji([...emojis, {id: uuid(), emoji: emojiList[i]}]) //need to create a new array, otherwise react doesn't notice changes in the array
    }
    function deleteEmoji(id) {
        setEmoji(emojis.filter(e => e.id !== id)) //returns a new array with the non-deleted ids & saves the state 
    }
    function makeHeart(){
        setEmoji(emojis.map(e => {
            return {...e, emoji:"❤️"}
        }))
    }
    return (
        <>
        {emojis.map(emoji => (
            <span style= {{fontSize:"2.5rem"}} onClick={ ()=> deleteEmoji(emoji.id)}> {emoji.emoji} </span>
        ))}
        <div>

        <button onClick={addEmoji}>Generate Random Emoji</button>
        <button onClick={makeHeart}>Make them all hearts</button>
        </div>
        </>
    )
}


// Does not create a new array, console log shows it properly, but it doesn't render on the page. Need to create a new array to render on the page

// export default function EmojiClicker({emojiList}) {
//     const [emojis, setEmoji] = useState([{id: uuid(), emoji:"🙃"}])
//     function addEmoji() {
//         const i = Math.floor(Math.random()*emojiList.length)+1
//         emojis.push(emojiList[i]) //it shows properly
//         console.log(emojiList[i]) //it shows properly
//         console.log(emojis)
//         setEmoji(emojis)
//     }
//     return (
//         <>
//         {emojis.map(emoji => (
//             <span style= {{fontSize:"2.5rem"}} > {emoji} </span> //doesn't render
//         ))}
//         <div>

//         <button onClick={addEmoji}>Generate Random Emoji</button>
//         </div>
//         </>
//     )
// }