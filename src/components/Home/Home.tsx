import React from "react";
import "./Home.scss";
import HeroPeep from "./HeroPeep";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

const buttonVariants = {
  initial: {
    x: "8px",
    y: "10px",
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 0px 0px 0px",
  },
  animate: {
    x: "0",
    y: "0",
    boxShadow: "8px 10px 4px rgba(0, 0, 0, 0.25)",
    transition: {
      delay: 0.3,
      type: "spring",
      duration: 0.5,
    },
  },
};

const Home: React.FC = () => {
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
        <div className="hero__desc__buttons">
          <motion.button
            variants={buttonVariants}
            initial="initial"
            animate="animate"
          >
            <Link to="/projects">Projects</Link>
          </motion.button>
          <motion.button
            variants={buttonVariants}
            initial="initial"
            animate="animate"
          >
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
