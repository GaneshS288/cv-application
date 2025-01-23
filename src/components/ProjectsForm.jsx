import { useState } from "react";

export default function ProjectsForm({ handleSubmit }) {
  let [projectInputItemIds, setProjectInputItemIds] = useState([]);

  function handleDeleteInput(event) {
    const currentId = event.target.dataset.id;
    const filteredIds = projectInputItemIds.filter((id) => id !== currentId);

    setProjectInputItemIds(filteredIds);
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Projects</legend>

        {projectInputItemIds.map((id) => {
          return (
            <ProjectsInputItem
              key={id}
              id={id}
              handleDeleteInput={handleDeleteInput}
            ></ProjectsInputItem>
          );
        })}

        <div>
          <button
            type="button"
            onClick={() => {
              setProjectInputItemIds([
                ...projectInputItemIds,
                crypto.randomUUID(),
              ]);
            }}
          >
            Add
          </button>
          <button type="submit">Submit</button>
        </div>
      </fieldset>
    </form>
  );
}

function ProjectsInputItem({ id, handleDeleteInput }) {
  return (
    <div className="projects-input-item flex-column">
      <div>
        <label>
          Title :
          <input
            type="text"
            name={id + "$" + "title"}
            placeholder="To-do List"
            required
          />
        </label>
      </div>

      <div>
        <label>
          Technologies Used :
          <input
            type="text"
            name={id + "$" + "technologies"}
            placeholder="React, tailWind"
            required
          />
        </label>
      </div>

      <div>
        <label>
          Project Link :
          <input type="text" name={id + "$" + "link"} />
        </label>
      </div>

      <div className="flex-column">
        <label>Bullets (place # before every bullet)</label>
        <textarea name={id + "$" + "bullets"} cols={30} rows={10}></textarea>
      </div>

      <button type="button" data-id={id} onClick={handleDeleteInput}>
        Delete
      </button>
    </div>
  );
}
