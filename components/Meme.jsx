import React from "react"
import memesData from "../memesData"

export default function Meme() {

    function buttonClick() {
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url
        console.log(url)
    }
  return (
    <main className="main">s
      <div className="form">
        <input
            className="form--input"
            type="text"
            placeholder="Top text"
       />
        <input
            className="form--input"
            type="text"
            placeholder="bottom text"
        />
        <button onClick={buttonClick} className="form--button">Generate Meme</button>
      </div>
    </main>

    
  )
}