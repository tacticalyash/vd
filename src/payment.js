import React, { useState } from 'react';
import './payment.css';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import YogaTeacherImage from './assets/yogaTeacher.png';
import Plan from './plan';
import { Link ,useNavigate} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import tygif from './assets/tygif.gif'

const Payment = ({}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [purchaseInProgress, setPurchaseInProgress] = useState(false);
  const location = useLocation();
  const selectedPackage = location.state?.selectedPackage || { text: '', price: '' };

  const handleBuyPackageClick = () => {
    if (selectedDate === null && selectedTimeSlot === null) {
      alert("Please select a date and a time slot before buying the package.");
    } else if (selectedDate === null) {
      alert("Please select a date before buying the package.");
    } else if (selectedTimeSlot === null) {
      alert("Please select a time slot before buying the package.");
    } else {
      setPurchaseInProgress(true);

      
      setTimeout(() => {
        
        setPurchaseInProgress(false);

        
      }, 6000); 
     
    }
  };

  const navigate = useNavigate();

  function goBack(){
navigate("/plan");
  }

  const handleDateClick = (index) => {
   
    setSelectedDate((prevSelectedDate) =>
      prevSelectedDate === index ? null : index
    );
  };

  const handleTimeSlotClick = (index) => {
    
    setSelectedTimeSlot((prevSelectedTimeSlot) =>
      prevSelectedTimeSlot === index ? null : index
    );
  };

  return (
    <div className="payment-container">
     
      <div className="scrollable-container">
        <h2>Yoga for Mind</h2>
        <div class="yoga-images-container">
        <img src={YogaTeacherImage} alt="Yoga Teacher" className="yoga-teacher-image" />
        <img src={YogaTeacherImage} alt="Yoga 1" class="yoga-image" />
        <img src={YogaTeacherImage}alt="Yoga 2" class="yoga-image" />
        <img src={YogaTeacherImage} alt="Yoga 3" class="yoga-image" />
        <img src={YogaTeacherImage} alt="Yoga 4" class="yoga-image" />
    </div>
        <h3>What is Yoga for Mind?</h3>
        <p>
          The yoga for mind sessions involve minimal physical movement and rely on techniques such as pranayama and
          meditation. Suited for women who cannot perform more physical forms of yoga and are looking for relief from
          concerns such as stress, anxiety, low mood, etc.
        </p>
        <h6>Yoga ᐧ Yoga for Mind ᐧ Package</h6>

        <h4>{selectedPackage.text} Yoga for Mind</h4>

       
        <div className="plan-change-container">

          <button className="change-plan-btn" onClick={goBack}>
            Change Plan
          </button>

          <p className="price-text">{selectedPackage.price}</p>
        </div>

        <h4>Pick a Start Date</h4>
        <h5>Dates are available only for the next 2 weeks.</h5>

       
        <div className="date-buttons-container">
          {[...Array(14)].map((_, index) => {
            const currentDate = new Date();
            currentDate.setDate(currentDate.getDate() + index);
            const formattedDate = currentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
            const dayOfWeek = currentDate.toLocaleDateString('en-US', { weekday: 'short' });

            return (
              <button
                key={index}
                className={`date-button ${selectedDate === index ? 'selected' : ''}`}
                onClick={() => handleDateClick(index)}
              >
                <p>{formattedDate}</p>
                <p>{dayOfWeek}</p>
              </button>
            );
          })}
        </div>

        <h4>Select Time Slot</h4>
        {purchaseInProgress && (
        <div className="gif-overlay">
          <img src={tygif} alt="Thank You GIF" />
        </div>
      )}
       
        <div className="time-slot-buttons">
          {[1, 2].map((index) => {
            return (
              <button
                key={index}
                className={`date-button ${selectedTimeSlot === index ? 'selected' : ''}`}
                onClick={() => handleTimeSlotClick(index)}
              >
                <h4>
          <WatchLaterIcon style={{ marginRight: '5px', fontSize: '12px' }} />
          {index === 1 ? '5.00 PM - 05.40 PM' : '8.00 AM - 08.40 AM'}
        </h4>
                <h5>MON, TUE, WED, THU, FRI</h5>
              </button>
            );
          })}
        <button className="buy-package" onClick={handleBuyPackageClick}>
            Buy Package
          </button>
        </div>
       

      </div>
    </div>
  );
};

export default Payment;
