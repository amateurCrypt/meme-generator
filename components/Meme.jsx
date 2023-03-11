import React from "react"
import memesData from "../memesData"

export default function Meme() {

    // const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")
    const [meme, setMeme] = React.useState({
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    

    function buttonClick() {
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
          ...prevMeme,
          randomImage: url
        }))
    }
    
    function imageCalled() {
        setMemeImage(url)
    }

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
        <button onClick={buttonClick} className="form--button">Generate Meme</button>
        <img 
            className="meme--image"
            src={memeImage} />
      </div>
      
    </main>

    
  )
}