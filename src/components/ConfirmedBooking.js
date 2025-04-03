import React from 'react';

const ConfirmedBooking = () => {
  return (
    <div className='comfirm container'>
      <div>
        <h1>Thank you for your reservation!</h1>
        <p>Your reservation is confirmed for the following details:</p>
        <ul>
          <li>Date: </li>
          <li>Time: </li>
          <li>Number of Guests: </li>
          <li>Occasion: </li>
        </ul>
      </div>
    </div>
  );
};

export default ConfirmedBooking;