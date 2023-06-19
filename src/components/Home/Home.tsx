import React, { useEffect } from "react";
import "./Hero.scss";
import HeroPeep from "./HeroPeep";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-scroll";

const parentVariants = {
  initial: {},
  animate: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.4,
    },
  },
};

const childVariants = {
  initial: { y: 30, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 1 } },
};

const Home: React.FC = () => {
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
    <motion.div
      className="hero"
      id="hero"
      variants={parentVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div
        className="hero__desc"
        variants={childVariants}
        initial="initial"
        animate="animate"
      >
        <h1>Hi, I'm Alex.</h1>
        <h3>
          I’m a <strong>Frontend Web Developer</strong> based in Germany.
        </h3>
        <div className="hero_buttons">
          <motion.button ref={ref} animate={animation}>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Projects
            </Link>
          </motion.button>
          <motion.button ref={ref} animate={animation}>
            <a
              href={require("../../documents/a-bowley-resume.pdf")}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "#000" }}
            >
              Resume
            </a>
          </motion.button>
        </div>
      </motion.div>
      <HeroPeep variants={childVariants} />
    </motion.div>
  );
};

export default Home;
