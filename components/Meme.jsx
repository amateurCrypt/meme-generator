import React from "react"

export default function Meme() {
  return (
    <main className="main">
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
        <button className="form--button">Generate Meme</button>
      </div>
    </main>

    
  )
}