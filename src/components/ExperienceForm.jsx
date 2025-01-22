import { useState } from "react";

export default function ExperienceForm({handleSubmit}) {
  let [experienceInputIds, setExperienceInputIds] = useState([]);

  function handleDeleteInput(event) {
    const currentId = event.target.dataset.id;
    const filteredIds = experienceInputIds.filter((id) => id !== currentId);

    setExperienceInputIds(filteredIds);
  }

  return (
    <form action="" onSubmit={handleSubmit} >
      <fieldset>
        <legend>Experience</legend>

        {experienceInputIds.map((id) => {
          return <ExperienceInputItem key={id} id={id} handleDeleteInput={handleDeleteInput}></ExperienceInputItem>;
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

function ExperienceInputItem({ id, handleDeleteInput }) {
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

      <button type="button" data-id={id} onClick={handleDeleteInput} >Delete</button>
    </div>
  );
}
