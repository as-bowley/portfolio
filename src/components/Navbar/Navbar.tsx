import React from "react";
import { Link } from "react-scroll";
import "./Navbar.scss";

const Navbar: React.FC = () => {
  return (
    <div className="nav">
      <div className="nav__title">
        <h1>Alex Bowley</h1>
      </div>
      <ul>
        <li>
          <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-450}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={250}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li>
          {" "}
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
    </div>
  );
};

export default Navbar;
