const PracticalExperience = ({ handleSubmit, hidePracticalEx }) => {
  return (
    <div>
      <form action="#" onSubmit={handleSubmit}>
        <legend onClick={hidePracticalEx}>Practical Experience</legend>
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
    </div>
  );
};

export default PracticalExperience;
