const GeneralInformation = ({ handleSubmit, hideGeneralInfo }) => {
  return (
    <form action="#" onSubmit={handleSubmit}>
      <legend onClick={hideGeneralInfo}>General Information</legend>
      <input type="text" name="fullName" placeholder="Full Name" />

      <input type="email" name="email" placeholder="Email" />

      <input type="tel" name="phone" placeholder="Phone Number" />

      <button type="submit">Submit</button>
    </form>
  );
};

export default GeneralInformation;
