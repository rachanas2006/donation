// src/pages/RequestDonation.js
import React from "react";
import "./RequestDonation.css";
console.log("RequestDonation component is loaded!");


function RequestDonation() {
  return (
    <div className="request-donation-page container mt-5">
      <div className="card shadow-lg p-4 bg-white rounded">
        <h2 className="text-center text-primary mb-4">Create a Donation Request</h2>

        <form>
          <div className="mb-3">
            <label className="form-label">Bank Account Number</label>
            <input type="text" className="form-control" placeholder="Enter bank account number" />
          </div>

          <div className="mb-3">
            <label className="form-label">Re-enter Bank Account Number</label>
            <input type="text" className="form-control" placeholder="Re-enter bank account number" />
          </div>

          <div className="mb-3">
            <label className="form-label">IFSC Code</label>
            <input type="text" className="form-control" placeholder="e.g. ABCD012345" />
          </div>

          <div className="mb-3">
            <label className="form-label">Bank Name & Branch</label>
            <input type="text" className="form-control" placeholder="e.g. SBI, Hyderabad Main Branch" />
          </div>

          <div className="mb-3">
            <label className="form-label">Upload Bank Passbook Image</label>
            <input type="file" className="form-control" accept=".jpeg, .jpg, .png" />
          </div>

          <div className="mb-3">
            <label className="form-label">Purpose for Donation</label>
            <textarea className="form-control" rows="3" placeholder="Please specify..."></textarea>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-success px-4">Submit Request</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RequestDonation;