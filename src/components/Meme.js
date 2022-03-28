import React, { useState, useEffect } from "react";

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    getMemes();
  }, []);

  function getMemeImage(e) {
    e.preventDefault();
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme(() => ({
      topText: "",
      bottomText: "",
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main className="container">
      <form>
        <div className="inputs">
          <input
            type="text"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
            placeholder="Top Text"
          />
          <input
            type="text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
            placeholder="Bottom Text"
          />
        </div>
        <button onClick={(e) => getMemeImage(e)} className="btn">
          Get a new meme image 🖼
        </button>
      </form>
      <div className="meme">
        <img className="meme-img" src={meme.randomImage} alt="" />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

export default Meme;
