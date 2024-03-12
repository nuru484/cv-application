const EducationalExperience = ({ handleSubmit }) => {
  return (
    <div>
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="schoolName">School Name:</label>
        <input type="text" id="schoolName" name="schoolName" />

        <label htmlFor="titleOfStudy">Title of Study</label>
        <input type="text" id="titleOfStudy" name="titleOfStudy" />

        <label htmlFor="dateOfStudy">Date of Study</label>
        <input type="date" id="dateOfStudy" name="dateOfStudy" />

        <button type="submit">Submit</button>
        <button>Edit</button>
      </form>
    </div>
  );
};

export default EducationalExperience;
