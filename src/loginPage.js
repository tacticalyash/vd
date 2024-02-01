import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Flow from './assets/flower.png';
import HomePage from './homePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import './loginPage.css';

const LoginPage = () => {
  const [phone, setPhone] = useState('');
  const [showHomePage, setShowHomePage] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const handleSendOtp = () => {
    if (!isChecked ) {
      
      alert('Please select the tick before proceeding!');
    } 
     
    else {
      
      setShowHomePage(true);
    }

  }

  return (
    <div className="app-container">
      <img src={Flow} alt="Background" className="background-image" />

      {showHomePage ? (
        <HomePage />
      ) : (
        <div className="login-form-container">
          <h1>Login to your Account</h1>

          <div className="input-container">
            <div className="flag-icon">
              <PhoneInput
                country={'us'}
                value={phone}
                onChange={(value, country) => setPhone(value)}
                inputStyle={{ width: '95px', height: '40px' }}
              />
            </div>
            
           

            <input type="tel" placeholder="Enter your number" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>

          <div className="terms-checkbox">
          <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />

            <label htmlFor="termsCheckbox">
              <span style={{ color: 'rose' }}>
                I agree with the Terms & conditions & Privacy Policy of Elda Health.
              </span>
            </label>
          </div>

          <button className="send-otp-btn" onClick={handleSendOtp}>
            Send OTP
          </button>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
