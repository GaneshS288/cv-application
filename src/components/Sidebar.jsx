import "../styles/Sidebar.css";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import GeneralForm from "./GeneralForm";

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
    id: crypto.randomUUID(),
    company: "ABC incorporated",
    position: "junior fullstack",
    from: "2012 jan",
    to: "2015 feb",
    bullets: "#hey there first one. #this is second one",
  },
];

export default function Sidebar({handleGeneralInfo}) {
  return (
    <div className="sidebar">
      <div className="container">
        <GeneralForm handleSubmit={handleGeneralInfo}></GeneralForm>
        <EducationForm educationInfo={educationInfo}></EducationForm>
        <ExperienceForm experienceInfo={experienceInfo}></ExperienceForm>
      </div>
    </div>
  );
}
