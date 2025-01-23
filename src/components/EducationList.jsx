import "../styles/EducationList.css"

export default function EducationList({ educationData }) {
  return (
    <div className="education-list">
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
        <h4 className="intitute">{institue}</h4>
        <p className="title">{title}</p>
        <p className="gpa">{gpa}</p>
      </div>

      <p className="year">{year}</p>
    </div>
  );
}
