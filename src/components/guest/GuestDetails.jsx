import React, { useState } from "react";
import { db, collection, getDocs } from "../../utils/firebase"; // Note: Adjust import paths as necessary
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./guest.css";

const GuestDetails = () => {
  const [password, setPassword] = useState("");
  const [guests, setGuests] = useState([]);
  const [error, setError] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  // Hardcoded password
  const HARD_CODED_PASSWORD = "1234";

  const handleLogin = async () => {
    if (password === HARD_CODED_PASSWORD) {
      setAuthenticated(true);
      fetchData();
    } else {
      setError("Invalid password");
    }
  };

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "guests"));
      const guestList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setGuests(guestList);
    } catch (err) {
      setError("Failed to fetch details");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div className="gy">
      {!authenticated ? (
        <form className="hut" onSubmit={handleSubmit}>
          <input
            type="password"
            className="keha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Admin Password"
            required
          />
          <button className="susa" type="submit">
            Show Guest Details
          </button>
        </form>
      ) : (
        <div>
          <h1>Guest Details</h1>
          {error && <p>{error}</p>}
          {guests.length === 0 ? (
            <p>No guests available</p>
          ) : (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="guest details table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Lastname</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Attending</TableCell>
                    <TableCell>Number of Guests</TableCell>
                    <TableCell>Message</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {guests.map((guest) => (
                    <TableRow key={guest.id}>
                      <TableCell>{guest.firstName}</TableCell>
                      <TableCell>{guest.lastName}</TableCell>
                      <TableCell>{guest.email}</TableCell>
                      <TableCell>{guest.attending ? "Yes" : "No"}</TableCell>
                      <TableCell>{guest.guests}</TableCell>
                      <TableCell>{guest.message || "No messages"}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </div>
      )}
    </div>
  );
};

export default GuestDetails;
