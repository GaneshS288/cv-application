import "../styles/ProjectsList.css"

export default function ProjectsList({ projectsData }) {
  return (
    <div className="projects-list flex-column">
      <h2>Projects</h2>
      {projectsData.map((data) => (
        <ProjectsListItem
          key={data.id}
          title={data.title}
          link={data.link}
          bullets={data.bullets}
          technologies={data.technologies}
        ></ProjectsListItem>
      ))}
    </div>
  );
}

function ProjectsListItem({ title, technologies, link, bullets }) {
  return (
    <div className="project-list-item flex-column">
      <h4>{title}</h4>
      <p><span>Technologies used - </span>{technologies}</p>
      <span>Link -<a href={link}>{link}</a></span>
      <ul>
        {bullets.map((bullet) => (
          <li key={bullet.id}>{bullet.value}</li>
        ))}
      </ul>
    </div>
  );
}
