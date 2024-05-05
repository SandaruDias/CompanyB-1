
import "./CustomerLogin.css"
import {useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { useEffect } from "react";

const CustomerLogin = () => {
  // State variables to hold user inputs
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Your logic to handle login goes here
    const obj = {
     username : username,
      password : password,
      rememberMe : rememberMe
    }

    if (username === 'Customer' && password === 'Customer') {
      

      navigate('/customer-order');
    } else {
      // Display error message
     
      alert("user name or password incorrect");
    }



    // Reset form fields
    console.log(obj);
    setEmail('');
    setPassword('');
    setRememberMe(false);
  };


  const handledSignup = () => {
    navigate('/customer-register')
  }

  return (
    <div className="form-container"> {/* Apply CSS class to container */}
      <h2>Customer Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-input"> {/* Apply CSS class to input container */}
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-input"> {/* Apply CSS class to input container */}
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="remember-me"> {/* Apply CSS class to Remember Me container */}
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            Remember Me
          </label>


        </div>
        <button className="submit-btn" type="submit">signin</button> 
        
      </form>
      <button className = "signup-btn" onClick={handledSignup}> signup </button>
    </div>
  );
};

export default CustomerLogin;