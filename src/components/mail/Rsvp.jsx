import React, { useState, useRef } from "react";
import "./rsvp.css";
import { db, collection, addDoc } from "../../utils/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import lo from "../../assets/logo4.png";
import { motion } from "framer-motion";

const RSVPForm = () => {
  const formRef = useRef();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [attending, setAttending] = useState("");
  const [guests, setGuests] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "guests"), {
        firstName,
        lastName,
        email,
        attending,
        guests,
        message,
      });

      toast.success("RSVP submitted successfully!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setFirstName("");
      setLastName("");
      setEmail("");
      setAttending("");
      setGuests("");
      setMessage("");
    } catch (err) {
      console.error("Error submitting RSVP: ", err);
      toast.error("Something went wrong, please try again.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <motion.div
      id="rsvp"
      className="rsvp"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      {/* Misty Overlay */}
      <motion.div
        className="misty-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />

      <motion.div
        className="form_container"
        initial={{ y: -30, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 80 }}
      >
        <form ref={formRef} onSubmit={handleSubmit} className="rsvp_form">
          <div className="tosto">
            <ToastContainer />
          </div>
          <motion.div
            className="event_bottom xy"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 50 }}
          >
            <img
              src={lo}
              loading="lazy"
              className="pu"
              alt="event decoration"
            />
          </motion.div>
          <motion.h2
            className="couple_story"
            initial={{ x: -50, opacity: 0, rotate: -10 }}
            animate={{ x: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 70 }}
          >
            Please submit your RSVP?
          </motion.h2>

          <motion.div
            className="form_grid"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6, type: "spring", stiffness: 60 }}
          >
            {[
              { value: firstName, onChange: setFirstName, placeholder: "First Name", delay: 0.7 },
              { value: lastName, onChange: setLastName, placeholder: "Last Name", delay: 0.8 },
              { value: attending, onChange: setAttending, placeholder: "Will you attend ?", options: ["Yes, I can't wait to celebrate with you", "No, sorry I can't make it"], delay: 0.9 },
              { value: guests, onChange: setGuests, placeholder: "Number Of Guests", options: ["1", "2"], delay: 1 }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="form_sub_grid"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: item.delay, type: "spring", stiffness: 70 }}
              >
                {item.options ? (
                  <select
                    value={item.value}
                    onChange={(e) => item.onChange(e.target.value)}
                    className="form_input select"
                    name={item.placeholder.replace(/\s+/g, '').toLowerCase()}
                    required
                  >
                    <option value="" disabled>
                      {item.placeholder}
                    </option>
                    {item.options.map((opt, i) => (
                      <option key={i} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type="text"
                    value={item.value}
                    onChange={(e) => item.onChange(e.target.value)}
                    placeholder={item.placeholder}
                    className="form_input"
                    name={item.placeholder.replace(/\s+/g, '').toLowerCase()}
                    required
                  />
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.button
            type="submit"
            className="submit"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95, rotate: -5 }}
            transition={{ duration: 0.3 }}
          >
            Submit RSVP
          </motion.button>
        </form>
      </motion.div>
      <motion.p
        className="copyright"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2, type: "spring", stiffness: 50 }}
      >
        &copy; 2024. All Rights Reserved.
      </motion.p>
    </motion.div>
  );
};

export default RSVPForm;
