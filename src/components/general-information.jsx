import { useState } from 'react';

const GeneralInformation = () => {
  const [generalInfo, setGeneralInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const updatedGeneralInfo = {
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
    };

    setShowForm(false);

    setGeneralInfo(updatedGeneralInfo);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGeneralInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const [showForm, setShowForm] = useState(true);

  const { fullName, email, phone } = generalInfo;

  const isFormValid = fullName && email && phone;

  return (
    <div>
      {showForm ? (
        <form action="#" onSubmit={handleSubmit}>
          <legend>General Information</legend>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={fullName}
            onChange={handleInputChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleInputChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={phone}
            onChange={handleInputChange}
            required
          />

          <button type="submit" disabled={!isFormValid}>
            Submit
          </button>
        </form>
      ) : (
        <section className="generalInfo">
          <p>{generalInfo.fullName} </p>
          <p> {generalInfo.email} </p>
          <p> {generalInfo.phone}</p>
          <button
            onClick={() => {
              setShowForm(true);
            }}
          >
            Edit General Information
          </button>
        </section>
      )}
    </div>
  );
};

export default GeneralInformation;
