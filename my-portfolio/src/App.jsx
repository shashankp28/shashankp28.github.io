import React, { useState } from "react";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./components/Home/Home";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  const [showContactOverlay, setShowContactOverlay] = useState(false);

  const toggleContactOverlay = () => {
    setShowContactOverlay(!showContactOverlay);
  };

  return (
    <div className="page">
      <NavBar onContactClick={toggleContactOverlay} />
      <div className="general">
        <Home />
        <Experience />
        <Projects />
      </div>
      {showContactOverlay && <Contact onClose={toggleContactOverlay} />}
    </div>
  );
}

export default App;
