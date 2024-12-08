import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import UserDetails from "./UserDetails";

function UserApp() {
  return (
    <Router>
      <Routes>
        {/* Home Page: List of Users */}
        <Route path="/" element={<Home />} />

        {/* User Details Page */}
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
    </Router>
  );
}

export default UserApp;
