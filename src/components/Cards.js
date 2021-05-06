import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Members</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/yellowteeth.jpg"
              text="Terry"
              label="CEO/CFO"
              path="terrry-twitter"
            />
            <CardItem
              src="images/owen.jpg"
              text="Owen"
              label="CTO"
              path="owen-twitter"
            />
            <CardItem
              src="images/mr.krabslasereyesblackbg.jpg"
              text="Kribs"
              label="Developer"
              path="kribs-twitter"
            />
            <CardItem
              src="images/max.jpg"
              text="Max"
              label="Design"
              path="max-twitter"
            />
            <CardItem
              src="images/aaron.jpeg"
              text="Chaso"
              label="Design"
              path="aaron-twitter"
            />
            <CardItem
              src="images/mo.jpg"
              text="Mo"
              label="Member"
              path="mo-twitter"
            />
            <CardItem
              src="images/michaelherrick.jpg"
              text="Michael"
              label="Member"
              path="michael-twitter"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
