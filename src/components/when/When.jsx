import React from "react";
import "./when.css";
import logo from "../../assets/logo3.png";
import till from "../../assets/till.jpeg";

const When = () => {
  return (
    <div className="when_container">
      <div className="when_grid">
        <div className="when_sub">
          <h2 className="when_title">VENUE✨</h2>
          <div className="linso"></div>

          <div className="details_con">
            <div className="subon">
              <h2 className="subon_title">DATE</h2>
              <div className="linsor"></div>

              <h3 className="suboner">December 10th, 2022</h3>
              <h3 className="suboner">5:00pm - 10:30pm</h3>
            </div>
            <div className="subon">
              <h2 className="subon_title">RECEPTION LOCATION</h2>
              <div className="linsor"></div>

              <h3 className="suboner">Troy Farm 2438 </h3>
              <h3 className="suboner"> Hwy 5 W Troy, ON</h3>
            </div>{" "}
            <div className="subon">
              <h2 className="subon_title">Dress Code</h2>
              <div className="linsor"></div>

              <h3 className="suboner">Rich Aunty vibes | Rich Uncle vibes</h3>
            </div>
          </div>
        </div>
        <div className="when_sub till">
          <img className="jo" src={till} alt="" />

          <div className="contra">
            <img className="newa" src={logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default When;
