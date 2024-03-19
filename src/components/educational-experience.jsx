import { useState } from 'react';

const EducationalExperience = ({ handleDelete }) => {
  const [educationalEx, setEducationalEx] = useState({
    schoolName: '',
    titleOfStudy: '',
    dateOfStudyFrom: '',
    dateOfStudyTo: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const updatedEducationalEx = {
      schoolName: formData.get('schoolName'),
      titleOfStudy: formData.get('titleOfStudy'),
      dateOfStudyFrom: formData.get('dateOfStudyFrom'),
      dateOfStudyTo: formData.get('dateOfStudyTo'),
    };

    setEducationalEx(updatedEducationalEx);
    setShowForm(false);
  };

  const [showForm, setShowForm] = useState(true);

  return (
    <div>
      {showForm ? (
        <form action="#" onSubmit={handleSubmit}>
          <legend>Educational Experience</legend>
          <input
            type="text"
            id="schoolName"
            name="schoolName"
            placeholder="Schoo Name"
          />

          <input
            type="text"
            id="titleOfStudy"
            name="titleOfStudy"
            placeholder="Title of Study"
          />

          <label htmlFor="dateOfStudyFrom">From</label>
          <input type="date" id="dateOfStudyFrom" name="dateOfStudyFrom" />

          <label htmlFor="dateOfStudyTo">To</label>
          <input type="date" id="dateOfStudyTo" name="dateOfStudyTo" />

          <button type="submit">Submit</button>
          <button onClick={handleDelete}>Delete</button>
        </form>
      ) : (
        <section className="educationalEx">
          <p>{educationalEx.schoolName}</p>
          <p>{educationalEx.titleOfStudy}</p>
          <p>
            {educationalEx.dateOfStudyFrom === '' ? '' : 'From: '}{' '}
            {educationalEx.dateOfStudyFrom}
          </p>
          <p>
            {' '}
            {educationalEx.dateOfStudyFrom === '' ? '' : 'To: '}{' '}
            {educationalEx.dateOfStudyTo}
          </p>
          <button
            onClick={() => {
              setShowForm(true);
            }}
          >
            Edit Educational Experience
          </button>
          <button onClick={handleDelete}>Delete</button>
        </section>
      )}
    </div>
  );
};

export default EducationalExperience;
