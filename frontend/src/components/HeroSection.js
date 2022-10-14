import React from "react";
import Nav from "./Nav";
import Greet from "./Greet";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <Nav />
      <div className="hero-content content-margin">
        <Greet />

        <p>Insights about my personal and work life, and the in-betweens</p>
      </div>
    </section>
  );
};

export default HeroSection;
