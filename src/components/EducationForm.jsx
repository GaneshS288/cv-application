import { useState } from "react";

export default function EducationForm({handleSubmit}) {
  let [educationInputIds, setEducationInputIds] = useState([]);

  function handleDeleteInput(event) {
    const currentId = event.target.dataset.id;
    const filteredIds = educationInputIds.filter((id) => id !==currentId);
    setEducationInputIds(filteredIds);
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Education</legend>
        {educationInputIds.map((id) => {
          return <EducationInputItem key={id} id={id} handleDeleteInput={handleDeleteInput}></EducationInputItem>;
        })}

        <button
          type="button"
          onClick={() =>
            setEducationInputIds([...educationInputIds, crypto.randomUUID()])
          }
        >
          Add
        </button>
        <button type="Submit">Submit</button>
      </fieldset>
    </form>
  );
}

function EducationInputItem({id, handleDeleteInput}) {
  return (
    <div className="education-input-item flex-column">
      <label>
        Intstitue :
        <input
          type="text"
          name={id + "$" + "institute"}
          placeholder="Institute Name"
          required
        />
      </label>

      <label>
        Certificate Title :
        <input
          type="text"
          name={id + "$" + "title"}
          placeholder="B.Sc. (Honours)"
          required
        />
      </label>

      <label>
        Year :
        <input
          type="number"
          name={id + "$" + "year"}
          placeholder="2020"
          required
        />
      </label>

      <label>
        GPA :
        <input type="text" name={id + "$" + "gpa"} placeholder="4.2" />
      </label>

      <button type="button" data-id= {id} onClick={handleDeleteInput} >Delete</button>
    </div>
  );
}
