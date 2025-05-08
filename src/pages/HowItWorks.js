import React from 'react';
import './HowItWorks.css';

function HowItWorks() {
  return (
    <div className="how-it-works-container">
      <h2 className="how-title">How It Works</h2>
      <div className="steps-container">
        <div className="step-card">
          1. Signup to create an account.
        </div>
        <div className="step-card">
          2. After successfully signing up, you will be redirected to the details submission page where you need to submit your details. You can choose to submit the details later by clicking on the home button, but you will not be able to access some features until submission.
        </div>
        <div className="step-card">
          3. Fill up your details in the details submission section & upload the required documents.
        </div>
        <div className="step-card">
          4. Once your details are verified, you're ready to go and access all the features.
        </div>
        <div className="step-card">
          5. If you're an individual and want to donate, click on the "Donate" button and select the appropriate option.
        </div>
        <div className="step-card">
          6. If you're an NGO, you can create a request for donation by filling in the required information.
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;