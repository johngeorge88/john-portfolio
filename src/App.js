import React, { useState } from "react";
import "./App.css";
import "./index.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

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

      <main className="px-5 lg:px-40 flex justify-center">
        {currentNav === "About" ? (
          <About />
        ) : currentNav === "Portfolio" ? (
          <Portfolio />
        ) : currentNav === "Resume" ? (
          <Resume />
        ) : currentNav === "Contact" ? (
          <Contact />
        ) : (
          <About />
        )}

      </main>
      <Footer />
    </div>
  );
}

export default App;