// LandingPage.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleAdminClick = () => {
    // Redirect to the administrative login page
    navigate('/admin-login');
  };

  const handleCustomerClick = () => {
    // Redirect to the administrative login page
    navigate('/customer-login');
  };
  return (
    <div className="landing-container">
      <div className="box customer-box" onClick={handleCustomerClick}>
        <h2>Customer</h2>
        {/* Additional content for the Customer box can go here */}
      </div>
      <div className="box admin-box" onClick={handleAdminClick}>
        <h2>Administrator</h2>
        {/* Additional content for the Administrator box can go here */}
      </div>
    </div>
  );
};

export default LandingPage;
