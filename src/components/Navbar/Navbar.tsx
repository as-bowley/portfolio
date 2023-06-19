import React from "react";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import "./Navbar.scss";
import TransitionLink from "../Utility/TransitionLink";

const Navbar: React.FC = () => {
  return (
    <div className="nav">
      <div className="nav__title">
        <h1>Alex Bowley</h1>
      </div>
      <ul>
        <li>
          <TransitionLink to="/">Home</TransitionLink>
        </li>
        <li>
          <TransitionLink to="/about">About</TransitionLink>
        </li>
        <li>
          <TransitionLink to="/projects">Projects</TransitionLink>
        </li>
        <li>
          <TransitionLink to="/contact">Contact</TransitionLink>
        </li>
      </ul>
      <MobileNav />
    </div>
  );
};

export default Navbar;
