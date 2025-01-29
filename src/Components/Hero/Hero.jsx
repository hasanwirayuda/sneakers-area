import React from "react";
import "./Hero.css";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <div className="hero-left-content">
          <h2>STEP INTO STYLE</h2>
          <div>
            <div className="hero-hand-icon">
              <p>find your</p>
            </div>
            <p>perfect pair</p>
            <p>today online</p>
          </div>
          <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="" />
          </div>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
