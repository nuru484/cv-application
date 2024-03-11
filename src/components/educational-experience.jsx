const EducationalExperience = () => {
  return (
    <div>
      <form action="#">
        <label htmlFor="school-name">School Name:</label>
        <input type="text" id="school-name" name="school-name" />

        <label htmlFor="title-of-study">Title of Study</label>
        <input type="text" id="title-of-study" name="title-of-study" />

        <label htmlFor="date-of-study">Date of Study</label>
        <input type="date" id="date-of-study" name="date-of-study" />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default EducationalExperience;
