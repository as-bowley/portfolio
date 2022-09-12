import React, { useEffect, useState } from "react";
import "./ScrollNav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { useScroll } from "framer-motion";

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
        <div className="scrollNav__hero">
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
        </div>
      ) : (
        <ul>
          <li>Home</li>
          <li
            className={scrollVal > 0.2 && scrollVal < 0.45 ? "currentlyAt" : ""}
          >
            About
          </li>
          <li
            className={
              scrollVal > 0.45 && scrollVal < 0.78 ? "currentlyAt" : ""
            }
          >
            Projects
          </li>
          <li className={scrollVal > 0.78 ? "currentlyAt" : ""}>Contact</li>
        </ul>
      )}
    </div>
  );
};

export default ScrollNav;
