import React from "react";
import Nav from "./Nav";
import BlogInfo from './BlogInfo'
import "./HeroSection.css";

const HeroSection = () => {

  return (
    <section className="hero-section">
      <Nav />
      <div className="hero-content content-margin">
        <BlogInfo />
       
        <p className='blog-title'>Insights about my personal and work life, and the in-betweens</p>
      </div>
    </section>
  );
};

export default HeroSection;
