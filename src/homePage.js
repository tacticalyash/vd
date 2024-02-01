import React, { useState } from 'react';
import './homePage.css';
import Yogad from './assets/yogad.mp4';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import MonitorHeartTwoToneIcon from '@mui/icons-material/MonitorHeartTwoTone';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';
import Plan from './plan';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [showHomePage, setShowHomePage] = useState(false);

  const handleSendOtp = () => {
   
    setShowHomePage(true);
  };

  return (
    <div className="home-page-container" style={{ backgroundColor: 'white' }}>
     
      {showHomePage ? (
        <Plan />
      ) : (
        <div className="yoga-for-mind-section">
          <div className="yoga-paragraph">
            <h2>Yoga for Mind</h2>
            <p>Watch our Lead Yoga Therapist, Ms. Uma Subramaniam, explain Yoga for the mind.</p>
          </div>
          <div className="yoga-video">
            <video src={Yogad} controls width="400" height="225" />
          </div>
        </div>
      )}

      
      <div className="for-you-section">
        <h4>Is this for you?</h4>
      </div>

   
      <div className="horizontal-contents">
      
        <div className="content">
          <SettingsAccessibilityIcon fontSize="large" color="black" />
          <p>Hard to feel calm or sleep because of stress</p>
          <button className="rose-btn" onClick={handleSendOtp}>
            Book trial @ 99
          </button>
        </div>

       
        <div className="content">
          <MonitorHeartTwoToneIcon fontSize="large" color="black" />
          <p>If you have palpitations and breathing trouble</p>
          <button className="rose-btn" onClick={handleSendOtp}>
            I want to buy
          </button>
        </div>

       
        <div className="content">
          <SportsMartialArtsIcon fontSize="large" color="black" />
          <p>You have been advised by doctors to avoid physical activity</p>
          <button className="rose-btn" onClick={handleSendOtp}>
            I have a question
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
