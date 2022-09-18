import React, { useEffect, useState } from "react";
import "./ScrollNav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { useScroll } from "framer-motion";
import { Link } from "react-scroll";
import AnimatedText from "./AnimatedText";
import { motion } from "framer-motion";

const ScrollNav: React.FC = () => {
  const [scrollVal, setScrollVal] = useState<number>(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    return scrollYProgress.onChange((el) => {
      setScrollVal(el);
    });
  }, [scrollYProgress]);

  return (
    <div className="scrollNav__scrolled">
      {scrollVal < 0.2 ? (
        <motion.div
          className="scrollNav__hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <ul>
            <li>
              <a
                href="https://github.com/as-bowley"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                <i className="devicon-github-original colored"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/alex-bowley"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                <i
                  className="devicon-linkedin-plain"
                  style={{ color: "#000" }}
                ></i>
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} />
            </li>
          </ul>
        </motion.div>
      ) : (
        <ul>
          <li>
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-180}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li
            className={scrollVal > 0.2 && scrollVal < 0.45 ? "currentlyAt" : ""}
          >
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-180}
              duration={500}
            >
              About
            </Link>
          </li>
          <li
            className={
              scrollVal > 0.45 && scrollVal < 0.78 ? "currentlyAt" : ""
            }
          >
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={40}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              Projects
            </Link>
          </li>
          <li className={scrollVal > 0.78 ? "currentlyAt" : ""}>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
      {scrollVal < 0.2 ? <AnimatedText word="SCROLL" /> : null}
    </div>
  );
};

export default ScrollNav;
