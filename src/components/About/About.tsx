import React from "react";
import "./About.scss";
import { motion } from "framer-motion";

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

const About: React.FC = () => {
  return (
    <motion.div
      className="about"
      initial="initial"
      animate="animate"
      variants={childVariants}
    >
      <div className="about_title">
        <h1>About</h1>
      </div>
      <motion.div className="about__container" id="about">
        <motion.div
          className="about_desc"
          variants={childVariants}
          initial="initial"
          animate="animate"
        >
          <p>
            Hi, I’m Alex and I’m passionate about everything web-development!
            <br></br>
            <br></br>
            My web development journey started whilst I was working as a plumber
            in the UK. I wanted to create a website for other plumbers to
            discover new tool innovations. I began with Wordpress and eventually
            landed upon The Odin Project, where I was able to really discover my
            passion for web development and all the technologies that come along
            with it.
            <br></br>
            <br></br>
            I’m always learning new technologies and believe that my passion and
            enthusiasm for web development would make me a perfect fit for a
            junior web development position!
          </p>
        </motion.div>
        <motion.div
          className="about__skills__container"
          variants={childVariants}
          initial="initial"
          animate="animate"
        >
          <div className="about__skills__title">
            <h3>Tech I use:</h3>
          </div>
          <div className="about__skills">
            <div className="about_skill">
              <i className="devicon-typescript-plain colored"></i>
              <h5>Typescript</h5>
            </div>
            <div className="about_skill">
              <i className="devicon-javascript-plain colored"></i>

              <h5>Javascript</h5>
            </div>
            <div className="about_skill">
              <i className="devicon-react-original colored"></i>

              <h5>React</h5>
            </div>
            <div className="about_skill">
              <i className="devicon-git-plain colored"></i>
              <h5>Git</h5>
            </div>
            <div className="about_skill">
              <i className="devicon-nodejs-plain colored"></i>
              <h5>Node.js</h5>
            </div>
            <div className="about_skill">
              <i className="devicon-sass-plain colored"></i>
              <h5>SASS</h5>
            </div>
            <div className="about_skill">
              <i className="devicon-figma-plain colored"></i>
              <h5>Figma</h5>
            </div>
            <div className="about_skill">
              <i className="devicon-jest-plain colored"></i>
              <h5>Jest</h5>
            </div>
            <div className="about_skill">
              <i className="devicon-webpack-plain colored"></i>
              <h5>Webpack</h5>
            </div>
            <div className="about_skill">
              <i className="devicon-firebase-plain colored"></i>
              <h5>Firebase</h5>
            </div>
            <div className="about_skill">
              <i className="devicon-npm-original-wordmark colored"></i>
              <h5>npm</h5>
            </div>
            <div className="about_skill">
              <i className="devicon-wordpress-plain colored"></i>
              <h5>Wordpress</h5>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
