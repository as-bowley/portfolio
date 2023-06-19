import React from "react";
import { Link, useLocation } from "react-router-dom";
import MobileNav from "./MobileNav";
import "./Navbar.scss";

const Navbar: React.FC = () => {
  const location = useLocation();
  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Projects", path: "/projects" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <div className="nav">
      <div className="nav__title">
        <Link to="/">
          <h1>Alex Bowley</h1>
        </Link>
      </div>
      <ul className="nav__items">
        {navLinks.map((link, index) => (
          <li
            key={index}
            className={`nav__item ${
              location.pathname === link.path ? "nav__item--active" : ""
            }`}
          >
            <Link className="nav__item-link" to={link.path}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
      <MobileNav className="nav__mobile" />
    </div>
  );
};

export default Navbar;
