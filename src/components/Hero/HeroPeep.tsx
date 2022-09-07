import React from "react";
import heropeep from "../../img/hero-peep.png";

const HeroPeep: React.FC = () => {
  return (
    <div className="hero__peep">
      <img src={heropeep} alt="" />
    </div>
  );
};

export default HeroPeep;
