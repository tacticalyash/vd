import React from 'react';
import './plan.css'; 
import YogaTeacherImage from './assets/yogaTeacher.png';
import Payment from './payment';
import Button from '@mui/material/Button';
import ChatIcon from '@mui/icons-material/Chat';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';  





const theme = createTheme({
  palette: {
    primary: {
      main: '#FF4081', 
    },
  },
});



const Plan = () => {
    
  const [selectedPackage, setSelectedPackage] = useState({ text: '', price: '' });
  const navigate = useNavigate();

  function goB(text, price) {
    setSelectedPackage({ text, price });
    navigate("/payment", { state: { selectedPackage: { text, price } } });
  }
      
      
  return (
    <ThemeProvider theme={theme}>
      <div className="plan-container">
    
        <div className="plan-content">
          <h4>Yoga for Mind</h4>
          <img src={YogaTeacherImage} alt="Yoga Teacher" />
          <div className="content-details">
            <h2>What is Yoga for Mind?</h2>
            <p>
              The Yoga for Mind Sessions involve minimal physical movement and relies on techniques
              such as pranayama and meditation. Suited for women who cannot perform more physical
              forms of yoga and are looking for relief from concerns such as stress, anxiety, low mood, etc.
            </p>
          </div>
        </div>

      
        <div className="plan-content">
          <h2>Choose your package</h2>
          <div className="package-container">
            
            <div className="package">
            
  <div className="left-content">
    <p>6 Months</p>
    <p><del>₹9999</del> ₹5499</p>
  </div>
  <div className="right-content">
    
    <p>₹916/month</p>
    
    <Button variant="contained" color="primary" onClick={() => goB("6 Months", "₹5499")}>
      BUY NOW
    </Button>
    
  </div>

            </div>

           
            <div className="package">
             
  <div className="left-content">
    <p>3 Months</p>
    <p><del>₹5999</del> ₹2999</p>
  </div>
  <div className="right-content">

    <p>₹999/month</p>
    
    <Button variant="contained" color="primary" onClick={() => goB("3 Months", "₹2999")}>
      BUY NOW
    </Button>
  
  </div>

            </div>

           
            <div className="package">
             
  <div className="left-content">
    <p>1 Month</p>
    <p><del>₹1999</del> ₹1199</p>
  </div>
  <div className="right-content">
    <p>₹1199/month</p>
   
    <Button variant="contained" color="primary" onClick={() => goB("1 Month", "₹1199")}>
      BUY NOW
    </Button>
   
  </div>

            </div>
            <div className="what-you-get">
          <h3>What you'll get</h3>
          <div className="benefits">
            <div className="benefit">
              <ChatIcon />
              <p>A chat group on the Elda app where you can connect with your trainer and the rest of the Elda Yoga Community</p>
            </div>
            <div className="benefit">
              <AccessTimeIcon />
              <p>Ability to reschedule your class if you miss your session.</p>
            </div>
          </div>
        </div>
          </div>
        </div>

       
      </div>
    </ThemeProvider>
  );
};

export default Plan;
