import React, { useState } from 'react';

const GeneralInformation = () => {
  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <form action="#">
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={name}
          onChange={handleNameChange}
        />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="phone-number">Phone Number</label>
        <input type="tel" id="phone-number" name="phone-number" />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default GeneralInformation;
