import "../styles/Sidebar.css";
import EducationInputList from "./EducationInputList";
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

export default function Sidebar() {
  return (
    <div className="sidebar">
      <form action="" method="dialog">
        <GeneralInfoInputs></GeneralInfoInputs>
        <EducationInputList educationInfo={educationInfo}></EducationInputList>
      </form>
    </div>
  );
}
