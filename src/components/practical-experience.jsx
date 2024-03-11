const PracticalExperience = () => {
  return (
    <div>
      <form action="#">
        <label htmlFor="company-name">Company Name:</label>
        <input type="text" id="company-name" name="company-name" />

        <label htmlFor="position-title">Position Title:</label>
        <input type="text" id="position-title" name="position-title" />

        <label htmlFor="main-responsibility">Main Responsibility:</label>
        <input
          type="text"
          id="main-responsibility"
          name="main-responsibility"
        />

        <label htmlFor="from-date">From:</label>
        <input type="date" id="from-date" name="from-date" />

        <label htmlFor="to-date">To: </label>
        <input type="date" id="date-of-study" name="date-of-study" />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default PracticalExperience;
