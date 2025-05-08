import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Donate from './pages/Donate';
import HowItWorks from './pages/HowItWorks';
import RequestDonation from './pages/RequestDonation';
import ContactUs from './pages/ContactUs';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/request" element={<RequestDonation />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;