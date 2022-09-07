import React from "react";
import "./Hero.scss";
import HeroPeep from "./HeroPeep";

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <div className="hero__desc">
        <h1>
          Hi, I'm Alex,<br></br> a Web Developer
        </h1>
        <h3>I’m a Frontend Web Developer based in Germany.</h3>
      </div>
      <HeroPeep />
    </div>
  );
};

export default Hero;
