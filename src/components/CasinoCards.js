import React from "react";
import CasinoCardItem from "./CasinoCardItem";
import "./CasinoCards.css";

function CasinoCards() {
  return (
    <div className="casinocards">
      <div className="casinocards__container">
        <img
          className="casinocards__background"
          src="images/casinobg.jpg"
          alt="casinoBackgroundImage"
        ></img>
        <h1>Games</h1>
        <div className="casinocards__wrapper">
          <ul className="casinocards__items">
            <CasinoCardItem
              src="images/blackjack.jpg"
              text="Black Jack"
              label="COMING SOON"
            />
            <CasinoCardItem
              src="images/coinflip.png"
              text="Coin Flip"
              label="Play Now"
              path="coinflipgame"
            />
            <CasinoCardItem
              src="images/LOTTO-BALLS.jpg"
              text="Lottery"
              label="COMING SOON"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CasinoCards;
