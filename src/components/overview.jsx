import { useState } from 'react';
import GeneralInformation from './general-information';
import EducationalExperience from './educational-experience';
import PracticalExperience from './practical-experience';

const Overview = () => {
  const [educationalEx, setEducationalEx] = useState([{ id: 1 }]);

  const handleEducationalEx = () => {
    const nextId = educationalEx.length + 1;
    const updatedEducationalEx = [...educationalEx, { id: nextId }];
    setEducationalEx(updatedEducationalEx);
  };

  return (
    <div className="app">
      <div>
        <GeneralInformation />
      </div>
      <div>
        <h2>Educational Experience</h2>
        <button onClick={handleEducationalEx}>
          Add Educational Experience
        </button>
        {educationalEx.map((experience) => (
          <EducationalExperience key={experience.id} />
        ))}
      </div>
      <div>
        <h2>Practical Experience</h2>
        <button>Add Practical Experience</button>
        <PracticalExperience />
      </div>
    </div>
  );
};

export default Overview;
