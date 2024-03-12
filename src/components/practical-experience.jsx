const PracticalExperience = ({ handleSubmit }) => {
  return (
    <div>
      <form action="#" onSubmit={handleSubmit}>
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

        <input type="date" id="fromDate" name="fromDate" placeholder="From" />

        <input type="date" id="toDate" name="toDate" placeholder="To Date" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PracticalExperience;
