import React from "react";
import { Button } from "./Button";
import "./casinohero.css";

function CasinoHero() {
  return (
    <div className="casinohero-container">
      <video src="/videos/CasinoHome.mp4" autoPlay loop muted />
      <h1>Welcome</h1>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          path="/casino"
        >
          Enter The Casino
        </Button>
      </div>
      <p>*Entering Casino Requires a Connected Web3 Wallet *</p>
    </div>
  );
}

export default CasinoHero;
