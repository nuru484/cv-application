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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEducationalEx((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [showForm, setShowForm] = useState(true);

  const { schoolName, titleOfStudy, dateOfStudyFrom, dateOfStudyTo } =
    educationalEx;

  const isFormValid =
    schoolName && titleOfStudy && dateOfStudyFrom && dateOfStudyTo;

  return (
    <div>
      {showForm ? (
        <form action="#" onSubmit={handleSubmit}>
          <legend>Educational Experience</legend>
          <input
            type="text"
            id="schoolName"
            name="schoolName"
            placeholder="School Name"
            value={schoolName}
            onChange={handleInputChange}
            required
          />

          <input
            type="text"
            id="titleOfStudy"
            name="titleOfStudy"
            placeholder="Title of Study"
            value={titleOfStudy}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="dateOfStudyFrom">From</label>
          <input
            type="date"
            id="dateOfStudyFrom"
            name="dateOfStudyFrom"
            value={dateOfStudyFrom}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="dateOfStudyTo">To</label>
          <input
            type="date"
            id="dateOfStudyTo"
            name="dateOfStudyTo"
            value={dateOfStudyTo}
            onChange={handleInputChange}
            required
          />

          <button type="submit" disabled={!isFormValid}>
            Submit
          </button>
          <button className="deleteEduExBtn" onClick={handleDelete}>
            Delete
          </button>
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
        </section>
      )}
    </div>
  );
};

export default EducationalExperience;
