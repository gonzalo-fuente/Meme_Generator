import React from "react";
import logo from "../assets/TrollFace.svg";

function Header() {
  return (
    <header>
      <img src={logo} alt="Troll face logo" />
      <h2 className="header-title">Meme Generator</h2>
    </header>
  );
}

export default Header;
