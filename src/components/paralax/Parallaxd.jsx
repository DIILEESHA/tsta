import React from "react";
import "./para.css";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import parax from "../../assets/pre.jpeg";
import Countdown from "../countdown/Countdown";

const Parallaxd = () => {
  const handleClicks = () => {
    // Scroll to the top of the SingleItemDetail component
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="paras">
      <Parallax strength={270} className="bgClassName" bgImage={parax}>
        <div className="content">
          <div className="sub_content">
            <Countdown />
            {/* <h5>Countdown to the Big Day!✨</h5> */}
            {/* <h1 className="niu"> */}
              {/* Every Second Brings Us Closer to the Celebration */}
            {/* </h1> */}
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Parallaxd;
