// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/donate">Donate</Link></li>
        <li><Link to="/request-donation">Request for Donation</Link></li>
        <li><Link to="/how-it-works">How it Works</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/signin">Sign In / Sign Up</Link></li>
      </ul>
    </nav>
  );
}

export default Header;