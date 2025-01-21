export default function GeneralInfoInputs({handleSubmit}) {
  return (
    <form action="" onSubmit={handleSubmit}>
      <fieldset>
        <legend>General</legend>
        <div className="flex-column">
          <label htmlFor="fullName">Full Name :</label>
          <input type="text" id="fullName" name="fullName" required />
        </div>
        <div className="flex-column">
          <label htmlFor="mail">Email :</label>
          <input type="email" id="mail" name="email" required />
        </div>
        <div className="flex-column">
          <label htmlFor="phone">Phone :</label>
          <input type="tel" id="phone" name="phone" required />
        </div>

        <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
}
