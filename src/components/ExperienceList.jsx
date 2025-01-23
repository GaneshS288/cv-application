import "../styles/ExperienceList.css";

export default function ExperienceList({ experienceData }) {
  return (
    <div className="experience-list">
      <h2>Experience</h2>
      {experienceData.map((data) => {
        return (
          <ExperienceItem
            key={data.id}
            company={data.company}
            position={data.position}
            from={data.from}
            to={data.to}
            bullets={data.bullets}
          ></ExperienceItem>
        );
      })}
    </div>
  );
}

function ExperienceItem({ company, position, from, to, bullets }) {
  return (
    <div>
      <div className="flex-row">
        <h4>{company}</h4>

        <div className="from-to-container">
          <span>{from}</span>-<span>{to}</span>
        </div>
      </div>

      <p>({position})</p>

      <ul>
        {bullets.map((bullet) => (
          <li key={bullet.bulletId}>{bullet.value}</li>
        ))}
      </ul>
    </div>
  );
}
