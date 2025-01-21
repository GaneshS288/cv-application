export default function ExperienceInputList({ experienceInfo }) {
  return (
    <fieldset>
      <legend>Experience</legend>
      
      {
        experienceInfo.map((info) => {
            return(
                <ExperienceInputItem
          key={info.id}
          company={info.company}
          position={info.position}
          from={info.from}
          to={info.to}
          bullets={info.bullets}
        ></ExperienceInputItem>
            );
        })
      }

    </fieldset>
  );
}

function ExperienceInputItem({ company, position, from, to, bullets }) {
  return (
    <div className="experience-input-item flex-column">
      <label>
        Company :
        <input
          type="text"
          name="company"
          value={company}
          placeholder="ABC corporations"
          required
        />
      </label>

      <label>
        Position :
        <input
          type="text"
          name="position"
          value={position}
          placeholder="Frontend Engineer"
          required
        />
      </label>

      <label>
        From (year, month) :
        <input
          type="text"
          name="experience-from"
          value={from}
          placeholder="2012 July"
          required
        />
      </label>

      <label>
        To (year, month)
        <input
          type="text"
          name="experience-to"
          value={to}
          placeholder="2016 August"
        />
      </label>

      <label className="flex-column" >
        Bullets (place #before each bullet point) :
        <textarea name="experience-bullets" cols="30" rows="10">
          {bullets}
        </textarea>
      </label>
    </div>
  );
}
