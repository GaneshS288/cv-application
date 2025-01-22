import { useState } from "react";

export default function ExperienceForm({handleSubmit}) {
  let [experienceInputIds, setExperienceInputIds] = useState([]);

  return (
    <form action="" onSubmit={handleSubmit} >
      <fieldset>
        <legend>Experience</legend>

        {experienceInputIds.map((id) => {
          return <ExperienceInputItem key={id} id={id}></ExperienceInputItem>;
        })}

        <div>
          <button
            type="button"
            onClick={() =>
              setExperienceInputIds([
                ...experienceInputIds,
                crypto.randomUUID(),
              ])
            }
          >
            Add
          </button>
          <button type="submit">Submit</button>
        </div>
      </fieldset>
    </form>
  );
}

function ExperienceInputItem({ id }) {
  return (
    <div className="experience-input-item flex-column">
      <label>
        Company :
        <input
          type="text"
          name={id + "$" + "company"}
          placeholder="ABC corporations"
          required
        />
      </label>

      <label>
        Position :
        <input
          type="text"
          name={id + "$" + "position"}
          placeholder="Frontend Engineer"
          required
        />
      </label>

      <label>
        From (year, month) :
        <input
          type="text"
          name={id + "$" + "from"}
          placeholder="2012 July"
          required
        />
      </label>

      <label>
        To (year, month)
        <input
          type="text"
          name={id + "$" + "to"}
          placeholder="2016 August"
          required
        />
      </label>

      <label className="flex-column">
        Bullets (place # before every bullet) :
        <textarea name={id + "$" + "bullets"} cols="30" rows="10"></textarea>
      </label>
    </div>
  );
}
