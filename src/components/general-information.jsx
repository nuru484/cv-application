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

    const updatedGeneralInf = {
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
    };

    setShowForm(false);

    setGeneralInfo(updatedGeneralInf);
  };

  const [showForm, setShowForm] = useState(true);

  return (
    <div>
      {showForm ? (
        <form action="#" onSubmit={handleSubmit}>
          <legend>General Information</legend>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            defaultValue={generalInfo.fullName}
            id="fullName"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            defaultValue={generalInfo.email}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            defaultValue={generalInfo.phone}
          />

          <button type="submit">Submit</button>
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
