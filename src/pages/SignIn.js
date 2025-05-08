import React from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

function SignIn() {
  return (
    <div className="auth-wrapper">
      <div className="auth-card shadow-lg">
        <h2 className="text-center mb-4">Sign In</h2>
        <p className="text-center">Enter Credentials!</p>
        <form>
          <div className="mb-3">
            <label className="form-label">Your Email</label>
            <input type="email" className="form-control" placeholder="Enter email" />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Enter password" />
          </div>
          <button type="submit" className="btn btn-primary w-100">Sign In</button>
        </form>
        <div className="text-center mt-3">
          <Link to="/signup">New user? Sign Up!</Link><br />
          <Link to="#">Forgot Password?</Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;