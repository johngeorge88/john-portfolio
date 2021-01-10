import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
// import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
// import Resume from "./components/Resume";
// import Header from "./components/Header";

function App() {
  const [nav] = useState(["About", "Portfolio", "Resume", "Contact"]);
  const [currentMobile, setCurrentMobile] = useState(false);
  const [currentNav, setCurrentNav] = useState(nav[0]);
  return (
    <div className={`${currentMobile ? "mobile-nav-active" : ""}`}>
      {/* <Header /> */}
      <Nav
        nav={nav}
        currentNav={currentNav}
        currentMobile={currentMobile}
        setCurrentNav={setCurrentNav}
        setCurrentMobile={setCurrentMobile}
      />

      <main>
        {currentNav === "About" ? (
          <About />
        ) : currentNav === "Portfolio" ? (
          <Portfolio />
        ) : currentNav === "Contact" ? (
          <Contact />
        ) : (
                <About />
              )}
      </main>
    </div>
  );
}

export default App;