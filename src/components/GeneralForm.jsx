export default function GeneralInfoInputs() {
  return (
    <form action="">
      <fieldset>
        <legend>General</legend>
        <div className="flex-column">
          <label htmlFor="fullName">Full Name :</label>
          <input type="text" id="fullName" required />
        </div>
        <div className="flex-column">
          <label htmlFor="mail">Email :</label>
          <input type="email" id="mail" required />
        </div>
        <div className="flex-column">
          <label htmlFor="phone">Phone :</label>
          <input type="tel" id="phone" required />
        </div>
      </fieldset>
    </form>
  );
}
