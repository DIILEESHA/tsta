import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "./music.css";

const ElfSightWidget = () => {
  const [isUserInteracted, setIsUserInteracted] = useState(false);

  useEffect(() => {
    const handleUserInteraction = () => {
      setIsUserInteracted(true);
    };

    document.addEventListener("click", handleUserInteraction);

    return () => {
      document.removeEventListener("click", handleUserInteraction);
    };
  }, []);

  useEffect(() => {
    const initElfSight = async () => {
      if (window.elfsight) {
        window.elfsight.init();

        // Assuming ElfSight provides an API method like `play` for playback initiation
        const audioElement = document.getElementById("audioElement");
        if (
          audioElement &&
          isUserInteracted &&
          typeof audioElement.play === "function"
        ) {
          try {
            await audioElement.play();
          } catch (error) {
            console.error("Error playing audio:", error);
          }
        }
      }
    };

    // Initiate ElfSight playback when the component mounts
    initElfSight();
  }, [isUserInteracted]);

  return (
    <div className="music-player">
      <Helmet>
        <script
          src="https://static.elfsight.com/platform/platform.js"
          data-use-service-core
          defer
          autoplay
        ></script>
      </Helmet>
      <div
        className="elfsight-app-a752a1cb-819a-4fea-95b5-4d9aea471fce "
        data-elfsight-app-lazy
        autoplay
      ></div>
    </div>
  );
};

export default ElfSightWidget;
