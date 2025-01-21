export default function ExperienceList({ experienceInfo }) {
  return (
    <div className="Experience">
      <h2>Experience</h2>
      {experienceInfo.map((info) => {
        return (
          <ExperienceItem
            key={info.id}
            company={info.company}
            position={info.position}
            from={info.from}
            to={info.to}
          ></ExperienceItem>
        );
      })}
    </div>
  );
}

function ExperienceItem({ company, position, from, to }) {
  return (
    <div>
      <div className="flex-row">
        <h4>{company}</h4>

        <div>
          <span>{from}</span> <span>{to}</span>
        </div>
      </div>

      <p>{position}</p>
      <ul>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          eligendi beatae explicabo, molestiae veritatis expedita nisi ratione
          illo.
        </li>
        <li>
          Ullam sequi accusantium recusandae incidunt quia ab temporibus,
          laborum harum excepturi, natus neque cupiditate quam, tempore
          assumenda porro!
        </li>
        <li>
          Voluptatum, possimus blanditiis rem officiis omnis doloribus saepe
          architecto eum quibusdam reprehenderit alias. Similique pariatur
          corporis illo eligendi!
        </li>
        <li>
          Fugiat error facilis tempora ipsam nam molestias. Recusandae soluta
          hic ullam vel iste dolorem dolores incidunt rem in.
        </li>
      </ul>
    </div>
  );
}
