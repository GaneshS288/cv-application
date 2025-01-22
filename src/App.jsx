import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar.jsx";
import CvSection from "./components/CvSection.jsx";
import { parseData } from "./util/util.js";

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

  function handleEducationSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newEducationData = [];

    for (let pair of formData) {
      parseData(pair, newEducationData);
    }
    setEducationData([...newEducationData]);
  }

  let [experienceData , setExperienceData] = useState([]);

  function handleExperienceSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newExperienceData = [];

    for (let pair of formData) {
      parseData(pair, newExperienceData)
    }

    console.log(newExperienceData);
    setExperienceData([...newExperienceData]);
  }

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
        ></Sidebar>
        <CvSection info={generalData} educationData={educationData} experienceData={experienceData}></CvSection>
      </div>
    </>
  );
}

export default App;
