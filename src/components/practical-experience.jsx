import { useState } from 'react';

const PracticalExperience = ({ handleDelete }) => {
  const [practicalEx, setPracticalEx] = useState({
    companyName: '',
    positionTitle: '',
    mainResponsibility: '',
    experienceFrom: '',
    experienceTo: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const updatedPracticalEx = {
      companyName: formData.get('companyName'),
      positionTitle: formData.get('positionTitle'),
      mainResponsibility: formData.get('mainResponsibility'),
      experienceFrom: formData.get('experienceFrom'),
      experienceTo: formData.get('experienceTo'),
    };

    setPracticalEx(updatedPracticalEx);
    setShowForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPracticalEx((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [showForm, setShowForm] = useState(true);

  const {
    companyName,
    positionTitle,
    mainResponsibility,
    experienceFrom,
    experienceTo,
  } = practicalEx;

  const isFormValid =
    companyName &&
    positionTitle &&
    mainResponsibility &&
    experienceFrom &&
    experienceTo;

  return (
    <div>
      {showForm ? (
        <form action="#" onSubmit={handleSubmit}>
          <legend>Practical Experience</legend>
          <input
            type="text"
            id="companyName"
            name="companyName"
            placeholder="Company Name"
            value={companyName}
            onChange={handleInputChange}
            required
          />

          <input
            type="text"
            id="positionTitle"
            name="positionTitle"
            placeholder="Position Title"
            value={positionTitle}
            onChange={handleInputChange}
            required
          />

          <input
            type="text"
            id="mainResponsibility"
            name="mainResponsibility"
            placeholder="Main Responsibility"
            value={mainResponsibility}
            onChange={handleInputChange}
            required
          />

          <input
            type="date"
            id="experienceFrom"
            name="experienceFrom"
            value={experienceFrom}
            onChange={handleInputChange}
            required
          />

          <input
            type="date"
            id="experienceTo"
            name="experienceTo"
            value={experienceTo}
            onChange={handleInputChange}
            required
          />

          <button type="submit" disabled={!isFormValid}>
            Submit
          </button>
          <button className="deletePracticalExBtn" onClick={handleDelete}>
            Delete
          </button>
        </form>
      ) : (
        <section className="practicalEx">
          <p>{practicalEx.companyName}</p>
          <p>{practicalEx.positionTitle}</p>
          <p>{practicalEx.mainResponsibility}</p>
          <p>
            {' '}
            {practicalEx.experienceFrom === '' ? '' : 'From: '}{' '}
            {practicalEx.experienceFrom}
          </p>
          <p>
            {' '}
            {practicalEx.experienceTo === '' ? '' : 'To: '}{' '}
            {practicalEx.experienceTo}
          </p>

          <button
            onClick={() => {
              setShowForm(true);
            }}
          >
            Edit Practical Experience
          </button>
        </section>
      )}
    </div>
  );
};

export default PracticalExperience;
