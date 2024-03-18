import { useState } from 'react';

const PracticalExperience = () => {
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
      ...practicalEx,
      companyName: formData.get('companyName'),
      positionTitle: formData.get('positionTitle'),
      mainResponsibility: formData.get('mainResponsibility'),
      experienceFrom: formData.get('experienceFrom'),
      experienceTo: formData.get('experienceTo'),
    };

    setPracticalEx(updatedPracticalEx);
    setShowForm(false);
  };

  const [showForm, setShowForm] = useState(true);

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
          />

          <input
            type="text"
            id="positionTitle"
            name="positionTitle"
            placeholder="Position Title"
          />

          <input
            type="text"
            id="mainResponsibility"
            name="mainResponsibility"
            placeholder="Main Responsibility"
          />

          <input
            type="date"
            id="experienceFrom"
            name="experienceFrom"
            placeholder="From Date"
          />

          <input
            type="date"
            id="experienceTo"
            name="experienceTo"
            placeholder="To Date"
          />

          <button type="submit">Submit</button>
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
