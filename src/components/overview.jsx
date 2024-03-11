import GeneralInformation from './general-information';
import EducationalExperience from './educational-experience';
import PracticalExperience from './practical-experience';

const Overview = () => {
  return (
    <div>
      <GeneralInformation />
      <EducationalExperience />
      <PracticalExperience />
    </div>
  );
};

export default Overview;
