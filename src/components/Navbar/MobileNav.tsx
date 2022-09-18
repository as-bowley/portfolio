import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const MobileNav: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };
  return (
    <div className="mobile-nav">
      <motion.nav
        animate={show ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.5 }}
        className="mobile-nav__nav"
      >
        <motion.div className="mobile-nav__menu">
          <ul>
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={() => setShow(!show)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-180}
                duration={500}
                onClick={() => setShow(!show)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={40}
                duration={500}
                onClick={() => setShow(!show)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-220}
                duration={500}
                onClick={() => setShow(!show)}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="mobile-nav__menu-socials">
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
                    style={{ color: "#fdffe0" }}
                  ></i>
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.nav>
      <motion.button
        className="mobile-nav__toggle"
        onClick={() => setShow(!show)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {show ? (
          <FontAwesomeIcon icon={faXmark} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </motion.button>
    </div>
  );
};

export default MobileNav;
