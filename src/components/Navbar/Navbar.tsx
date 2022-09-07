import React from "react";
import "./Navbar.scss";

const Navbar: React.FC = () => {
  return (
    <div className="nav">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
