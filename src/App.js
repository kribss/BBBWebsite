import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import CasinoHome from "./components/pages/CasinoHome";
import About from "./components/pages/About";
import Apply from "./components/pages/Apply";
import Footer from "./components/Footer";
import Casino from "./components/pages/Casino";
import CoinflipGame from "./components/pages/CoinflipGame";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/casinohome" component={CasinoHome} />
          <Route path="/about" component={About} />
          <Route path="/application" component={Apply} />
          <Route path="/casino" component={Casino} />
          <Route path="/coinflipgame" component={CoinflipGame} />

          <Route
            path="/twitter"
            component={() => {
              window.location.href = "https://twitter.com";
              return null;
            }}
          />
          <Route
            path="/introduction-video"
            component={() => {
              window.location.href =
                "https://www.youtube.com/watch?v=3REZlcR5YEs";
              return null;
            }}
          />
          <Route
            path="/kribs-twitter"
            component={() => {
              window.location.href = "https://twitter.com/_kribs";
              return null;
            }}
          />
          <Route
            path="/terrry-twitter"
            component={() => {
              window.location.href = "https://twitter.com/terrrydoteth";
              return null;
            }}
          />
          <Route
            path="/owen-twitter"
            component={() => {
              window.location.href = "https://twitter.com/owendoteth";
              return null;
            }}
          />
          <Route
            path="/aaron-twitter"
            component={() => {
              window.location.href = "https://twitter.com/a_a_rondoteth";
              return null;
            }}
          />
          <Route
            path="/max-twitter"
            component={() => {
              window.location.href = "https://twitter.com/terrrydoteth";
              return null;
            }}
          />
          <Route
            path="/mo-twitter"
            component={() => {
              window.location.href = "https://twitter.com/stinkylinkymo";
              return null;
            }}
          />
          <Route
            path="/michael-twitter"
            component={() => {
              window.location.href = "https://twitter.com/LinkKween";
              return null;
            }}
          />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
