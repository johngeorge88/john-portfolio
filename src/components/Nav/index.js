import React from 'react';
import coverImage from '../../assets/my-pic.jpg';

function Nav(props) {
  const {
    nav = [],
    currentNav,
    setCurrentNav,
  } = props;

  return (
    <nav className="bg-gray-800 text-white shadow-lg p-6">
      {/* <img src={coverImage} className="rounded-circle border border-5 img-s" alt="..."></img> */}
      <div className="container mx-auto">
        <div className="sm:flex justify-around">
          <a className="text-6x1 font-bold" href="/">JOHNGEORGE</a>

          {/* Menu Items */}
          <ul className="sm:selc-center text-xl border-t sm:border-none text-gray-400">
            <li className="sm:inline-block">
              <a className="p-3 hover:text-white" aria-current="page" href="#about" onClick={() => setCurrentNav("About")}>
                About Me</a>
            </li>
            <li className="sm:inline-block">
              <a className="p-3 hover:text-white" href="#">
                <span onClick={() => setCurrentNav("Portfolio")}>Portfolio</span>
              </a>
            </li>
            <li className="sm:inline-block">
              <a className="p-3 hover:text-white" href="#">
                <span onClick={() => setCurrentNav("Contact")}>Contact</span></a>
            </li>
            <li className="sm:inline-block">
              <a className="p-3 hover:text-white" href="#" onClick={() => setCurrentNav("Resume")}>Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
}

export default Nav;
