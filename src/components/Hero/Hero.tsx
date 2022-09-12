import React, { useEffect } from "react";
import "./Hero.scss";
import HeroPeep from "./HeroPeep";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: "0",
        y: "0",
        boxShadow: "8px 10px 4px rgba(0, 0, 0, 0.25)",
        transition: {
          delay: 0.3,
          type: "spring",
          duration: 0.5,
        },
      });
    }
    if (!inView) {
      animation.start({
        x: "8px",
        y: "10px",
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 0px 0px 0px",
      });
    }
  }, [inView, animation]);
  return (
    <div className="hero" id="hero">
      <div className="hero__desc">
        <h1>
          Hi, I'm Alex,<br></br> a Web Developer
        </h1>
        <h3>I’m a Frontend Web Developer based in Germany.</h3>
        <div className="hero_buttons">
          <motion.button ref={ref} animate={animation}>
            Projects
          </motion.button>
          <motion.button ref={ref} animate={animation}>
            Resume
          </motion.button>
        </div>
      </div>
      <HeroPeep />
    </div>
  );
};

export default Hero;
