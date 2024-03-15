const EducationalExperience = ({ handleSubmit }) => {
  return (
    <div>
      <form action="#" onSubmit={handleSubmit}>
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
      </form>
    </div>
  );
};

export default EducationalExperience;
