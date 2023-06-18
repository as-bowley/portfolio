import React, { useEffect } from "react";
import "./About.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About: React.FC = () => {
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
    <div className="about">
      <div className="about_title">
        <h1>About</h1>
      </div>
      <motion.div
        ref={ref}
        className="about__container"
        id="about"
        animate={animation}
      >
        <div className="about_desc">
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
        </div>
        <div className="about__skills__container">
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
        </div>
      </motion.div>
    </div>
  );
};

export default About;
