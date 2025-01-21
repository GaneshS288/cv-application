import "../styles/Sidebar.css";
import EducationInputList from "./EducationInputList";
import ExperienceInputList from "./ExperienceInputList";
import GeneralInfoInputs from "./General-Info-inputs";

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

export default function Sidebar() {
  return (
    <div className="sidebar">
      <form action="" method="dialog">
        <GeneralInfoInputs></GeneralInfoInputs>
        <EducationInputList educationInfo={educationInfo}></EducationInputList>
        <ExperienceInputList experienceInfo={experienceInfo}></ExperienceInputList>
      </form>
    </div>
  );
}
