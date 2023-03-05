import React from "react"
import Reactlogo from "../src/assets/react.svg"

export default function Header() {
  return (
    <header className="header">
      <img className="logo" src={Reactlogo} alt="logo" />
      <h2 className="header--title">Meme Generator</h2>
      <p className="header--text">React Course - Project 3</p>
    </header>
  )
}