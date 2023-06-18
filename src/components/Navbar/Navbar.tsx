import React from "react";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import "./Navbar.scss";

const Navbar: React.FC = () => {
  return (
    <div className="nav">
      <div className="nav__title">
        <h1>Alex Bowley</h1>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <MobileNav />
    </div>
  );
};

export default Navbar;
