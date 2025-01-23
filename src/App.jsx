import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar.jsx";
import CvSection from "./components/CvSection.jsx";
import { createSubmitHandler } from "./util/util.js";

function App() {
  let [generalData, setGeneralData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  function handleGeneralSubmit(event) {
    event.preventDefault();
    let formData = new FormData(event.target);
    let data = {};

    for (let pair of formData.entries()) {
      data[pair[0]] = pair[1];
    }
    setGeneralData({ ...data });
  }

  let [educationData, setEducationData] = useState([]);
  const handleEducationSubmit = createSubmitHandler(setEducationData);

  let [experienceData, setExperienceData] = useState([]);
  const handleExperienceSubmit = createSubmitHandler(setExperienceData);

  let [projectsData, setProjectsData] = useState([]);
  const handleProjectsSubmit = createSubmitHandler(setProjectsData);

  return (
    <>
      <header>
        <h1>CV Application</h1>
      </header>
      <div className="flex-row">
        <Sidebar
          handleGeneralSubmit={handleGeneralSubmit}
          handleEducationSubmit={handleEducationSubmit}
          handleExperienceSubmit={handleExperienceSubmit}
          handleProjectsSubmit={handleProjectsSubmit}
        ></Sidebar>
        <CvSection
          generalInfo={generalData}
          educationData={educationData}
          experienceData={experienceData}
          projectsData={projectsData}
        ></CvSection>
      </div>
    </>
  );
}

export default App;
