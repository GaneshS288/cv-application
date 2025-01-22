import "../styles/Sidebar.css";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import GeneralForm from "./GeneralForm";

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

export default function Sidebar({handleGeneralSubmit, handleEducationSubmit, handleExperienceSubmit}) {
  return (
    <div className="sidebar">
      <div className="container">
        <GeneralForm handleSubmit={handleGeneralSubmit}></GeneralForm>
        <EducationForm handleSubmit={handleEducationSubmit}></EducationForm>
        <ExperienceForm handleSubmit={handleExperienceSubmit}></ExperienceForm>
      </div>
    </div>
  );
}
