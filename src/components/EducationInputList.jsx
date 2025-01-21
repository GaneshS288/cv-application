export default function EducationInputList({educationInfo}) {
  return (
    <fieldset>
      <legend>Education</legend>
      {
        educationInfo.map((info) => {
            return (<EducationInputItem key={info.id} institute={info.institute} certificateTitle={info.title} year={info.year} gpa={info.gpa}></EducationInputItem>);
        })
      }
    </fieldset>
  );
}

function EducationInputItem({institute, title, year, gpa}) {
  return (
    <div className="education-input-item flex-column">
      <label>
        Intstitue :
        <input type="text" name="institute" value={institute} placeholder="Institute Name" required />
      </label>

      <label>
        Certificate Title :
        <input type="text" name="certificate-title" value={title} placeholder="B.Sc. (Honours)" required />
      </label>

      <label>
        Year :
        <input type="number" name="certification-year" value={year} placeholder="2020" required />
      </label>

      <label>
        <input type="text" name="gpa" value={gpa} placeholder="4.2"/>
      </label>
    </div>
  );
}
