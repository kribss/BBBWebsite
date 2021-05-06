import React from "react";
import { Button } from "./Button";
import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">Buy Linky... Stay Stinky</p>
        {/* <form className="footer-form">
          <input
            type="Email"
            name="Email"
            placeholder="Your Email"
            className="footer-input"
          />
          <Button className="submit-button" buttonStyle="btn--outline">
            Subscribe
          </Button>
        </form> */}
      </section>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <i className="fab fa-ethereum">BBB</i>
            </Link>
            <p className="built-by-kribs">built by kribs.eth</p>
          </div>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-links-wrapper">
          <div className="footer-link-items">
            <Link to="/about" className="footer-link">
              About Us
            </Link>
            <Link to="/application" className="footer-link">
              Apply
            </Link>
            <Link to="/casinohome" className="footer-link">
              Casino
            </Link>
            <Link to="/twitter" className="footer-link">
              Twitter
            </Link>
            <Link to="/discord" className="footer-link">
              Discord
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
