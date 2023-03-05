import React from "react"

export default function Meme() {
  return (
    <main className="main">
      <form className="form">
        <input className="form--input" type="text" placeholder="Top text" />
        <input className="form--input" type="text" placeholder="bottom text" />
        <button className="button">Generate Meme</button>
      </form>
    </main>

    
  )
}