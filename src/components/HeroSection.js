import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-container">
        <img className="hero-background" src="images/billionaires.jpg"></img>
        <h1>Billionaires Boys Blub</h1>
        <br></br>
        <div className="hero-btns">
          {/* <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            path="/application"
          >
            Apply
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            path="introduction-video"
          >
            Watch Trailer <i className="far fa-play-circle" />
          </Button> */}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
