import React, { useReducer } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Header from './Header'
import Booking from './Booking'
import ConfirmedBooking from './ConfirmedBooking'
import Hero from './Hero';
import Menu from './Menu';

const Main = () => {
  const seedRandom = function (seed) {
    let m = 2 ** 35 - 31;
    let a = 185852;
    let s = seed % m;
    return function() {
      s = (a * s) % m;
      return s / m;
    }
  }

  const fetchAPI = function(date) {
    let result = [];
    let random = seedRandom(date.getDate());
    for(let i = 17; i <=23; i++) {
      if(random() > 0.5) {
        result.push(i+':00');
      }
      if(random() > 0.5) {
        result.push(i+':30');
      }
    }
    return result;
  }

  const submitAPI = function(formData) {
    return true;
  } 
  const initialState = {availableTimes: fetchAPI(new Date())};
  const [state, dispatch] = useReducer(updateTimes, initialState);

  function updateTimes(state, action) {
    return { availableTimes: fetchAPI(new Date()) };
  }

  const navigate = useNavigate();

  function submitForm(formData) {
    if(submitAPI(formData)) {
      navigate("/confirmed");
    }
  }

  return (
      <main>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/booking" element={<Booking availableTimes={state} dispatch={dispatch} SubmitForm={submitForm} />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
        <Route path="*" element={<h1>404</h1>} />
        <Route path="/menu" element={<Menu/>} />
      </Routes>
      
      </main>
  );
};

export default Main;