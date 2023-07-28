import React from "react";
import hero_img from "../assets/images/hero_image.png";

const Hero = () => {
  return (
    <div className="hero-container">
      <img src={hero_img} alt="" className="hero-image" />
    </div>
  );
};

export default Hero;
