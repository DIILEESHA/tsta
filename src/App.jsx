// src/App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import "./App.css";
import loh from './assets/logo3.png'
import Ge from './components/Gather.jsx'

// Dynamic imports for components
const GuestDetails = lazy(() => import("./components/guest/GuestDetails"));
const Nav = lazy(() => import("./components/nav/Nav"));
const Home = lazy(() => import("./components/Home"));

function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="spinner-container">
            <motion.div
              className="spinner"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 300}}
            >
              <div className="monogram">
                <img style={{width:"100px"}} src={loh} alt="" />
              </div>
            </motion.div>
            <div className="website-name">Temitope's 50th Praise Fiesta</div>
          </div>
        }
      >
        <Nav />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/guestdetails" element={<GuestDetails />} / */}
          <Route path="/guestdetail" element={<Ge/>} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

// CSS-in-JS styles for the spinner
const styles = `
  .spinner-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: #fff; /* Background color */
  }

  .spinner {
    width: 80px;
    height: 80px;
    border: 8px solid #f3f3f3;
    border-top: 8px solid #3498db;
    border-radius: 50%;
    margin-bottom: 20px;
    position: relative;
  }

  .monogram {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 24px;
    color: #3498db;
    font-weight: bold;
  }

  .website-name {
    font-size: 18px;
    color: #333;
    text-align: center;
  }
`;

// Append the styles to the document head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
