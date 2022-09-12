import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import ScrollNav from "./components/ScrollNav/Scrollnav";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="sidebar"></div>
      <ScrollNav />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
