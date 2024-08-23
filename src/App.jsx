// src/App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import GuestDetails from "./components/guest/GuestDetails";
import Nav from "./components/nav/Nav";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        {/* <div> */}

        <Route path="/" element={<Home />} />
        <Route path="/guestdetails" element={<GuestDetails />} />
        {/* </div> */}
      </Routes>
    </Router>
  );
}

export default App;
