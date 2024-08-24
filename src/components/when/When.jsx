import React from "react";
import { motion } from "framer-motion";
import "./when.css";
import logo from "../../assets/logo4.png";
import till from "../../assets/till.jpeg";
import { Map } from "@mui/icons-material";

const When = () => {
  return (
    <div id="event-details" className="when_container">
      <div className="when_grid">
        {/* Left section with smooth fade-in and slide-up animation */}
        <motion.div
          className="when_sub"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="when_title">Event Details</h2>

          <div className="details_con">
            <motion.div
              className="subon"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <h2 className="subon_title">Date</h2>
              <div className="linsor"></div>
              <h3 className="suboner">Saturday, 14th of September 2024</h3>
              <h3 className="suboner">4:00pm</h3>
            </motion.div>

            <motion.div
              className="subon"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <h2 className="subon_title">Venue</h2>
              <div className="linsor"></div>
              <h3 className="suboner">Troy Farms & Event Space,</h3>
              <h3 className="suboner">2438 Hwy 5 W,</h3>
              <h3 className="suboner">Troy, ON,</h3>
              <h3 className="suboner">L0R 2B0</h3>
              <p className="ko">
                Please look out for the sign by the black gate. Kindly take the
                first left turn after the black gate and follow the signs to the
                event space.
              </p>
              <p className="ko">
                <a target="_blank" style={{color:"inherit"}} href="https://www.google.com/maps/dir/43.3750016,-79.7278208/Troy+Farms,+2438+Hwy+5+W,+Troy,+ON+L0R+2B0,+Canada/Big+Data+Insights,+1020+Brevik+Pl,+Mississauga,+ON+L4W+4N7,+Canada/@43.4429573,-80.2804881,11.42z/am=t/data=!3m1!5s0x882b38b1e8fc5c41:0x6a64b758a8687cf2!4m14!4m13!1m0!1m5!1m1!1s0x882c7b16620861fb:0x208c79717fc573d7!2m2!1d-80.1992995!2d43.2581943!1m5!1m1!1s0x882b38b1de6aaaab:0xe012dfdfd12b0556!2m2!1d-79.6431052!2d43.6355266?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D">
                  Check Google link <Map />
                </a>
              </p>
            </motion.div>

            <motion.div
              className="subon"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <h2 className="subon_title">Dress Code</h2>
              <div className="linsor"></div>
              <h3 className="suboner">Rich Aunty vibes</h3>
              <h3 className="suboner">Rich Uncle vibes</h3>
            </motion.div>

            <motion.div
              className="subon"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <h2 className="subon_title">Theme</h2>
              <div className="linsor"></div>
              <h3 className="suboner">Lush Meadows</h3>
            </motion.div>
          </div>
        </motion.div>

        {/* Right section with smooth fade-in and slide-in animation */}
        <motion.div
          className="when_sub till"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <img className="jo" src={till} alt="Event Image" />
          <motion.div
            className="contra"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <img className="newa" src={logo} alt="Logo" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default When;
