import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./count.css";

const Countdown = () => {
  const weddingDate = new Date("2024-09-14T00:00:00");
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function calculateTimeRemaining() {
    const currentDate = new Date();
    const timeDifference = weddingDate - currentDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  return (
    <div className="card_container">
      <motion.div
        className="card_time"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      >
        <h1 className="nimna">{timeRemaining.days}</h1>
        <h2 className="ji">DAYS</h2>
      </motion.div>
      <motion.div
        className="card_time"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      >
        <h1>:</h1>
      </motion.div>
      <motion.div
        className="card_time"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      >
        <h1 className="nimna">{timeRemaining.hours}</h1>
        <h2 className="ji">HOURS</h2>
      </motion.div>
      <motion.div
        className="card_time"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      >
        <h1>:</h1>
      </motion.div>
      <motion.div
        className="card_time"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      >
        <h1 className="nimna">{timeRemaining.minutes}</h1>
        <h2 className="ji">MINS</h2>
      </motion.div>
      <motion.div
        className="card_time"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      >
        <h1>:</h1>
      </motion.div>
      <motion.div
        className="card_time"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      >
        <h1 className="nimna">{timeRemaining.seconds}</h1>
        <h2 className="ji">SECS</h2>
      </motion.div>
    </div>
  );
};

export default Countdown;
