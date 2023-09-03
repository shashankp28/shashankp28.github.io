import React, { useState } from "react";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./components/Home/Home";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import { Gift } from "./components/Gift/Gift";


function App() {
  const [showContactOverlay, setShowContactOverlay] = useState(false);
  const [showGiftOverlay, setShowGiftOverlay] = useState(false);

  const toggleContactOverlay = () => {
    setShowContactOverlay(!showContactOverlay);
  };
  const toggleGiftOverlay = () => {
    setShowGiftOverlay(!showGiftOverlay);
  };

  return (
    <div className="page">
      <NavBar onContactClick={toggleContactOverlay} onGiftClick={toggleGiftOverlay}  />
      <div className="general">
        <Home />
        <Experience />
        <Projects />
      </div>
      {showContactOverlay && <Contact onClose={toggleContactOverlay} />}
      {showGiftOverlay && <Gift onClose={toggleGiftOverlay} />}
    </div>
  );
}

export default App;
