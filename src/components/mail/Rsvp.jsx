import React, { useState, useRef } from "react";
import "./rsvp.css";
import { db, collection, addDoc } from "../../utils/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import lo from '../../assets/logo3.png';

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
      // Save data to Firebase
      await addDoc(collection(db, "guests"), {
        firstName,
        lastName,
        email,
        attending,
        guests,
        message,
      });

      console.log("RSVP submitted successfully!");

      // Show success toast
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

      // Reset form fields
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
    <div className="rsvp">
      <div className="form_container">
        <form ref={formRef} onSubmit={handleSubmit} className="rsvp_form">

          <div className="tosto">

          <ToastContainer />
          </div>
          <div className="event_bottom xy">
            <img src={lo} loading="lazy" className="pu" alt="event decoration" />
          </div>
          <h2 className="couple_story">Will You Attend?</h2>

          <div className="form_grid">
            <div className="form_sub_grid">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                className="form_input"
                name="firstName"
                required
              />
            </div>
            <div className="form_sub_grid">
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                className="form_input"
                name="lastName"
                required
              />
            </div>
            <div className="form_sub_grid">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="form_input"
                name="email"
                required
              />
            </div>
            <div className="form_sub_grid">
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="form_input select"
                name="guests"
                required
              >
                <option value="" disabled>
                  Number Of Guests
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div className="form_sub_grid">
              <select
                value={attending}
                onChange={(e) => setAttending(e.target.value)}
                className="form_input select"
                name="attending"
                required
              >
                <option value="" disabled>
                  Will you attend the wedding?
                </option>
                <option value="Yes">Yes, I'll be there</option>
                <option value="No">Can't come</option>
              </select>
            </div>
            <div className="form_sub_grid">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                name="message"
                className="form_input2"
                placeholder="Message goes here..."
                rows="4"
              ></textarea>
            </div>
          </div>

          <button type="submit" className="submit">
            Submit Now
          </button>
        </form>
      </div>
      <p className="copyright">&copy; 2023. All Rights Reserved.</p>
    </div>
  );
};

export default RSVPForm;
