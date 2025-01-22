export default function EducationList({ educationData }) {
  return (
    <div className="Education">
      <h2>Education</h2>
      {educationData.map((info) => [
        <EducationListItem
          key={info.id}
          institue={info.institute}
          title={info.title}
          year={info.year}
          gpa={info.gpa}
        ></EducationListItem>,
      ])}
      <hr />
    </div>
  );
}

function EducationListItem({ institue, title, year, gpa }) {
  return (
    <div className="flex-row">
      <div>
        <h4>{institue}</h4>
        <p>{title}</p>
        <p>{gpa}</p>
      </div>

      <p>{year}</p>
    </div>
  );
}
