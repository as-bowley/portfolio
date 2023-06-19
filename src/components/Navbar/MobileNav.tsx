import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

type MobileNavProps = {
  className?: string;
};

const MobileNav: React.FC<MobileNavProps> = () => {
  const [show, setShow] = useState<boolean>(false);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Projects", path: "/projects" },
    { title: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    {
      href: "https://github.com/as-bowley",
      target: "_blank",
      rel: "noreferrer",
      className: "devicon-github-original ",
    },
    {
      href: "https://www.linkedin.com/in/alex-bowley",
      target: "_blank",
      rel: "noreferrer",
      className: "devicon-linkedin-plain ",
      style: { color: "#fdffe0" },
    },
    {
      icon: <FontAwesomeIcon icon={faEnvelope} />,
    },
  ];

  return (
    <div className="mobile-nav">
      <motion.nav
        animate={show ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.5 }}
        className="mobile-nav__nav"
      >
        <motion.div className="mobile-nav__menu">
          <ul className="mobile-nav__items">
            {navLinks.map((link, index) => (
              <li key={index} className="mobile-nav__item">
                <Link
                  to={link.path}
                  onClick={() => setShow(!show)}
                  className="mobile-nav__link"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mobile-nav__socials">
            <ul className="mobile-nav__socials-list">
              {socialLinks.map((link, i) => (
                <li key={i} className="mobile-nav__socials-item">
                  {link.icon ? (
                    link.icon
                  ) : (
                    <a
                      href={link.href}
                      target={link.target}
                      rel={link.rel}
                      style={link.style}
                    >
                      <i className={link.className}></i>
                    </a>
                  )}
                </li>
              ))}
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
