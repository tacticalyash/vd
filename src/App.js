import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-phone-input-2/lib/style.css';
import Flow from './assets/flower.png'; 
import HomePage from './homePage';
import LoginPage from './loginPage';
import Plan from './plan';
import Payment from './payment';
import hommy from './homePage';
import './App.css';
import { Home } from '@mui/icons-material';

function App () {
  return (
   
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
   
  );
};

export default App;
