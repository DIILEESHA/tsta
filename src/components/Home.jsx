import React, { useEffect, useState, lazy, Suspense } from "react";
import "../App.css";

// Dynamic imports for components
const Header = lazy(() => import("./h/Header"));
const When = lazy(() => import("./when/When"));
const Parralaxd = lazy(() => import("./paralax/Parallaxd.jsx"));
const Rsvp = lazy(() => import("./mail/Rsvp.jsx"));
const Testo = lazy(() => import("./testomonials/Testo.jsx"));
const MusicPlayer = lazy(() => import("./music/MusicPlayer.jsx"));

const Home = () => {
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

  return (
    <div className="fgr">
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <When />
        <Parralaxd />
        <Testo />
        <MusicPlayer isUserInteracted={isUserInteracted} />
        <Rsvp />
      </Suspense>
    </div>
  );
};

export default Home;
