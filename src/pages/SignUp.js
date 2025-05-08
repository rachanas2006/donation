import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

function SignUp() {
  const [role, setRole] = useState("individual");

  return (
    <div className="auth-wrapper">
      <div className="auth-card shadow-lg">
        <h2 className="text-center mb-4">Sign Up Now!</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Your Email</label>
            <input type="email" className="form-control" placeholder="Enter email" />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Enter password" />
          </div>
          <div className="mb-3">
            <label className="form-label">Sign Up as:</label>
            <select className="form-select" onChange={(e) => setRole(e.target.value)}>
              <option value="individual">Individual</option>
              <option value="ngo">NGO</option>
            </select>
          </div>
          <div className="form-check mb-3">
            <input type="checkbox" className="form-check-input" id="terms" />
            <label className="form-check-label" htmlFor="terms">
              I agree to the terms and conditions
            </label>
          </div>
          <button type="submit" className="btn btn-success w-100">Sign Up</button>
        </form>
        <div className="text-center mt-3">
          <Link to="/signin">Already a member? Sign In!</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;