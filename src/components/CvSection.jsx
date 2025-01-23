import GeneralInfo from "./General-info.jsx";
import "../styles/CvSection.css";
import EducationList from "./EducationList.jsx";
import ExperienceList from "./ExperienceList.jsx";
import ProjectsList from "./ProjectsList.jsx";

export default function CvSection({
  educationData,
  generalInfo,
  experienceData,
  projectsData,
}) {
  return (
    <div className="cv-page">
      <div className="container">
        {generalInfo.fullName.trim() !== "" ? (
          <GeneralInfo
            fullName={generalInfo.fullName}
            email={generalInfo.email}
            phone={generalInfo.phone}
          ></GeneralInfo>
        ) : null}

        {educationData.length !== 0 ? (
          <EducationList educationData={educationData}></EducationList>
        ) : null}

        {experienceData.length !== 0 ? (
          <ExperienceList experienceData={experienceData}></ExperienceList>
        ) : null}

        {projectsData.length !== 0 ? <ProjectsList projectsData={projectsData}></ProjectsList> : null}
      </div>
    </div>
  );
}
