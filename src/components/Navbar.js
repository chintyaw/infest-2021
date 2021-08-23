import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 960) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  useEffect(() => {
    handleResize();
  }, []);

  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <img src="/infest-logo.webp" width="auto" height="50px" alt="" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="/#Tentang" className="nav-links" onClick={closeMobileMenu}>
              Tentang
            </a>
          </li>
          {/*
           <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="/acara" className="nav-links" onClick={closeMobileMenu}>
              Acara <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
          </li> */}

          {isMobile ? (
            <>
              <li className="nav-item">
                <Link
                  to="/webinar"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Webinar
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/workshop"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Workshop
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/competition"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Competition
                </Link>
              </li>
            </>
          ) : (
            <li
              className="nav-item"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <div className="nav-links" onClick={closeMobileMenu}>
                Acara <i className="fas fa-caret-down" />
              </div>
              {dropdown && <Dropdown />}
            </li>
          )}

        </ul>
      </nav>
    </>
  );
}

export default Navbar;
