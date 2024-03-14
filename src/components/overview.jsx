import GeneralInformation from './general-information';
import EducationalExperience from './educational-experience';
import PracticalExperience from './practical-experience';
import { useState } from 'react';

const Overview = () => {
  return (
    <div className="main-container">
      {/* <GeneralInformation />
      <EducationalExperience /> */}
      <PracticalExperience />
    </div>
  );
};

export default Overview;
