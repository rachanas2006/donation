import React from 'react';
import './Donate.css';

function Donate() {
  return (
    <div className="donate-container">
      <h1>Submit your Details for Verification</h1>

      <form className="donate-form">
        <label>Name of NGO:</label>
        <input type="text" placeholder="Enter NGO name" />

        <label>Address:</label>
        <input type="text" placeholder="Enter address" />

        <label>State:</label>
        <input type="text" placeholder="Enter state" />

        <label>Pincode:</label>
        <input type="text" placeholder="Enter pincode" />

        <label>Contact Details:</label>
        <input type="text" placeholder="Enter contact number" />

        <label>Upload Registration Documents (.jpeg, .png, .jpg):</label>
        <input type="file" accept=".jpeg,.jpg,.png" />

        <label>City:</label>
        <input type="text" placeholder="Enter city" />

        <label>Difficulties faced by NGO:</label>
        <textarea placeholder="Please specify difficulties..." rows="4" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Donate;