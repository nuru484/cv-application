const GeneralInformation = () => {
  return (
    <form>
      <input type="text" name="fullName" placeholder="Full Name" />

      <input type="email" name="email" placeholder="Email" />

      <input type="tel" name="phoneNumber" placeholder="Phone Number" />

      <button type="submit">Submit</button>
      <button>Edit</button>
    </form>
  );
};

export default GeneralInformation;
