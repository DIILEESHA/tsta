import React, { useState } from "react";
import "./nav.css";
import logor from "../../assets/logo3.png";
import { Link as RouterLink } from "react-router-dom"; // Keep this if you have other links outside of scrolling sections
import { Link } from "react-scroll"; // Import Link from react-scroll
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleNavClick = () => {
    setIsMobile(false); // Close the menu after clicking a nav item
  };

  return (
    <div className="nav_container">
      <RouterLink to="/" className="moy">
        <img className="logor" src={logor} alt="Logo" />
      </RouterLink>
      <div className="lino"></div>

      <div className="hamburger" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </div>

      <div className={isMobile ? "nav_menu mobile" : "nav_menu"}>
        <ul className="nav_ul">
          <li className="nav-li">
            <Link
              to="home"
              smooth={true}
              duration={500}
              onClick={handleNavClick} // Close menu when clicked
            >
              Home
            </Link>
          </li>
          <li className="nav-li">
            <Link
              to="event-details"
              smooth={true}
              duration={500}
              onClick={handleNavClick} // Close menu when clicked
            >
              Event details
            </Link>
          </li>
          <li className="nav-li">
            <Link
              to="rsvp"
              smooth={true}
              duration={500}
              onClick={handleNavClick} // Close menu when clicked
            >
              RSVP
            </Link>
          </li>
          <li className="nav-li">
            <Link
              to="praise-wall"
              smooth={true}
              duration={500}
              onClick={handleNavClick} // Close menu when clicked
            >
              Praise Wall
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
