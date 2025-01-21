import GeneralInfo from "./General-info.jsx";
import "../styles/CvSection.css";
import EducationList from "./EducationList.jsx";
import ExperienceList from "./ExperienceList.jsx";

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

const experienceInfo = [
  {
    id: crypto.randomUUID(),
    company: "ABC incorporated",
    position: "junior fullstack",
    from: "2012 jan",
    to: "2015 feb",
    bullets: "#hey there first one. #this is second one",
  },

  {
    id : crypto.randomUUID(),
    company: "ABC incorporated",
    position: "junior fullstack",
    from: "2012 jan",
    to: "2015 feb",
    bullets: "#hey there first one. #this is second one",
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
      <ExperienceList experienceInfo= {experienceInfo} ></ExperienceList>
    </div>
  );
}
