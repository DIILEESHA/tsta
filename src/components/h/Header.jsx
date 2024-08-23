import React from "react";
import "./header.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slider from "./slider.json";
import Countdown from "../countdown/Countdown";
import { Parallax } from "react-parallax";
var settings = {
  infinite: true,
  speed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1900,
  fade: true, // Set fade to true for a smooth transition
  cssEase: "linear", // Use linear easing for fade effect
  adaptiveHeight: true, // Adjust height dynamically
};

const Header = () => {
  return (
    <div className="header_container">
      <Slider {...settings}>
        {slider.map((doc, index) => (
          <>
            <div key={index} className="slider_container">
              <img alt={doc.title} src={doc.image} className="slide-image" />

              <div className="slider_inside">
                {/* <Countdown /> */}
                {/* <h2 className="inside_title">Temitope’s 50th Praise Fiesta</h2> */}
                {/* <div className="slider_rectangle">
                  <div className="slider_sub">
                    <h2 className="slider_title_sm">SATURDAY</h2>
                    <h2 className="slider_date_sm">Sep 14, 2024</h2>
                  </div>{" "}
                  <div className="slider_sub lo">
                    <h2 className="slider_title_sm">4.00PM</h2>
                    <h2 className="slider_date_sm">Troy Farm</h2>
                  </div>
                </div> */}
                <div className="rsvp_btn_section">
                  {/* <button className="vg">
                    <a className="moy" href="/">
                      rsvp
                    </a>
                  </button> */}
                </div>
              </div>
            </div>
          </>
        ))}
      </Slider>
    </div>
  );
};

export default Header;
