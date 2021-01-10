import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    nav = [],
    currentNav,
    setCurrentNav,
    currentMobile,
    setCurrentMobile,
  } = props;

  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">John George</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className={`nav-link  ${currentNav === "About" && "navActive"}`} aria-current="page" href="#about" onClick={() => setCurrentNav("About")}>
                About Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
              <span onClick={() => setCurrentNav("Portfolio")}>Portfolio</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
              <span onClick={() => setCurrentNav("Contact")}>Contact</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
}

export default Nav;
