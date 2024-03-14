import { useState } from 'react';

const PracticalExperience = () => {
  const [practicalExperience, setPracticalExperience] = useState({
    companyName: '',
    positionTitle: '',
    mainResponsibility: '',
    fromDate: '',
    toDate: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const updatedPracticalExperience = {
      ...practicalExperience,
      companyName: formData.get('companyName'),
      positionTitle: formData.get('positionTitle'),
      mainResponsibility: formData.get('mainResponsibility'),
      fromDate: formData.get('fromDate'),
      toDate: formData.get('toDate'),
    };

    setPracticalExperience(updatedPracticalExperience);
  };

  return (
    <div>
      {
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
      }

      <div className="practicalExperience">
        <p className="cvCompanyName">
          Company Name: {practicalExperience.companyName}
        </p>
        <p className="cvPositionTitle">Position Title:</p>
        <p className="cvMainResponsibility">Main Responsiblity:</p>
        <p className="cvFromDate">From Date: </p>
        <p className="cvToDate">To Date: </p>
      </div>
    </div>
  );
};

export default PracticalExperience;
