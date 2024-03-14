import { useState } from 'react';

const PracticalExperience = ({ handleSubmit }) => {
  const [isFormVisible, setIsFormVisible] = useState(true);

  const handleEditClick = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div>
      {isFormVisible && (
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

          <input
            type="date"
            id="fromDate"
            name="fromDate"
            placeholder="From Date"
          />

          <input type="date" id="toDate" name="toDate" placeholder="To Date" />

          <button type="submit">Submit</button>
        </form>
      )}

      <button onClick={handleEditClick}>Edit</button>
    </div>
  );
};

export default PracticalExperience;
