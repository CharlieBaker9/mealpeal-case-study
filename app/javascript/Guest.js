import React, { useState } from 'react'

const Guest = () => {
  const [firstName, setFirstName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  function viewMenu(e) {
    e.preventDefault();

    // insert checks here

    console.log('You clicked view menu.');
  }

  return (
    <div className="guest">
      <h1 className="guest__title">Welcome</h1>
      <p className="guest__subtitle">
        Please provide your full name and phone number.
      </p>
      <input
        className="input"
        type="text"
        placeholder="Please enter your full name"
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
      />
      <input
          className="input"
          type="text"
          placeholder="Your Phone Number"
          onChange={(e) => setPhoneNumber(e.target.value)}
          value={phoneNumber}
      />
      <button className="button" onClick={viewMenu}>
        View menu
      </button>
    </div>
  )
}

export default Guest
