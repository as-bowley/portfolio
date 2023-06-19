import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { TransitionGroup, Transition } from "react-transition-group";
import TransitionDiv from "./components/Utility/TransitionDiv/TransitionDiv";

const App: React.FC = () => {
  return (
    <Router>
      <LayoutWithTransitions />
    </Router>
  );
};

const LayoutWithTransitions: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  const handleEnter = () => {
    setIsLoading(true);
  };

  const handleExit = () => {
    setIsLoading(false);
  };

  return (
    <>
      <Layout>
        <Routes>
          <Route
            path="*"
            element={
              <TransitionGroup>
                <Transition
                  key={location.key}
                  timeout={{ enter: 500, exit: 300 }}
                  onEnter={handleEnter}
                  onExited={handleExit}
                >
                  {(
                    state:
                      | "entering"
                      | "entered"
                      | "exiting"
                      | "exited"
                      | "unmounted"
                  ) => (
                    <>
                      <TransitionDiv state={state} />
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                      </Routes>
                    </>
                  )}
                </Transition>
              </TransitionGroup>
            }
          />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
