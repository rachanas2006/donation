// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";
import {
  FaHandHoldingHeart,
  FaHandsHelping,
  FaInfoCircle,
  FaEnvelope,
  FaUserAlt,
} from "react-icons/fa";
import "./Home.css";

function Home() {
  return (
    <div className="container mt-5">
      {/* Header Section with Background Image */}
      <div
        className="text-center mb-5 text-white p-5"
        style={{
          backgroundImage: "url('/images/bg-img.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "12px",
        }}
      >
        <h1 className="display-5 fw-bold">Donation and Charity Management System</h1>
        <p className="lead mt-3">Empowering kindness through organized giving and support</p>
      </div>

      {/* Feature Cards */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div className="col">
          <div className="card h-100 text-center shadow border-0 bg-light">
            <div className="card-body">
              <h5 className="card-title">
                <FaHandHoldingHeart className="me-2 text-danger" />
                Donate
              </h5>
              <p className="card-text">Help those in need by making a donation.</p>
              <Link to="/donate" className="btn btn-primary w-100 mt-2">Go to Donate</Link>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 text-center shadow border-0 bg-light">
            <div className="card-body">
              <h5 className="card-title">
                <FaHandsHelping className="me-2 text-warning" />
                Request for Donation
              </h5>
              <p className="card-text">NGOs can request help for their cause.</p>
              <Link to="/request" className="btn btn-warning w-100 mt-2">Make a Request</Link>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 text-center shadow border-0 bg-light">
            <div className="card-body">
              <h5 className="card-title">
                <FaInfoCircle className="me-2 text-info" />
                How It Works
              </h5>
              <p className="card-text">Understand the steps and process.</p>
              <Link to="/how-it-works" className="btn btn-info w-100 mt-2 text-white">Learn More</Link>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 text-center shadow border-0 bg-light">
            <div className="card-body">
              <h5 className="card-title">
                <FaEnvelope className="me-2 text-secondary" />
                Contact Us
              </h5>
              <p className="card-text">Reach out for support or queries.</p>
              <Link to="/contact" className="btn btn-secondary w-100 mt-2">Contact Us</Link>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 text-center shadow border-0 bg-light">
            <div className="card-body">
              <h5 className="card-title">
                <FaUserAlt className="me-2 text-success" />
                Sign In / Sign Up
              </h5>
              <p className="card-text">Access your account or register now.</p>
              <Link to="/signin" className="btn btn-success w-100 mt-2">Login / Register</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
