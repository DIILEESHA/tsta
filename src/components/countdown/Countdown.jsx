import React, { useState, useEffect } from "react";
import "./count.css";

const Countdown = () => {
  const weddingDate = new Date("2024-09-25T00:00:00");
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
  //   {timeRemaining.hours} HOURS {timeRemaining.minutes} MINS {timeRemaining.seconds} SECS
  return (
    <div className="card_container">
      <div className="card_time">
        <h1 className="nimna">{timeRemaining.days}</h1>
        <h2 className="ji">DAYS</h2>
      </div>
      <div className="card_time">
        {/* <h1>:</h1> */}
      </div>
      <div className="card_time">
        <h1 className="nimna">{timeRemaining.hours}</h1>
        <h2 className="ji">HOURS</h2>
      </div>
      <div className="card_time">
        {/* <h1>:</h1> */}
      </div>
      <div className="card_time">
        <h1 className="nimna">{timeRemaining.minutes}</h1>
        <h2 className="ji">MINS</h2>
      </div>
      <div className="card_time">
        {/* <h1>:</h1> */}
      </div>
      <div className="card_time">
        <h1 className="nimna">{timeRemaining.seconds}</h1>

        <h2 className="ji">SECS</h2>
      </div>
    </div>
  );
};

export default Countdown;
