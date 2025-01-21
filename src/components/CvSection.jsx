import GeneralInfo from "./General-info.jsx";
import "../styles/CvSection.css";
import EducationList from "./EducationList.jsx";

const educationInfo = [
  {
    id: crypto.randomUUID(),
    institute: "Abc university",
    title: "B.Sc. (Honours)",
    year: 2020,
    gpa: 4.2,
  },
  {
    id: crypto.randomUUID(),
    institute: "Abc university",
    title: "B.Sc. (Honours)",
    year: 2020,
    gpa: 4.2,
  },
];

export default function CvSection() {
  return (
    <div className="cv-page">
      <GeneralInfo
        fullName={"Ganesh"}
        email={"1234@gmail.com"}
        phone={"12345678"}
      ></GeneralInfo>
      <EducationList educationInfo={educationInfo}></EducationList>
    </div>
  );
}
