import React from "react";
import "./nav.css";
import logor from "../../assets/logo3.png";

const Nav = () => {
  return (
    <div className="nav_container">
      {/* <h2 className="nav_title"> */}

      <img className="logor" src={logor} alt="" />

      {/* </h2> */}
      <div className="lino"></div>
      <div className="ul">
        <ul className="nav_ul">
          <li className="nav-li">our story</li>
          <li className="nav-li">Event details</li>
          <li className="nav-li">rsvp</li>
          <li className="nav-li">Praise Wall</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
