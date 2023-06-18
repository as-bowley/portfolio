import React, { useEffect } from "react";
import "./styles/App.scss";
import Layout from "./Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TransitionDiv from "./components/TransitionDiv/TransitionDiv";

const App: React.FC = () => {
  return (
    <Router>
      <TransitionDiv />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
