import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar.jsx";
import CvSection from "./components/CvSection.jsx";

function App() {
  let [generalInfo, setGeneralInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  function handleGeneralSubmit(event) {
    event.preventDefault()
    let formData = new FormData(event.target);
    let data = {};
    for(let pair of formData.entries()) {
      data[pair[0]] = pair[1];
    }
    setGeneralInfo({...data});
  }

  return (
    <>
      <header>
        <h1>CV Application</h1>
      </header>
      <div className="flex-row">
        <Sidebar handleGeneralInfo={handleGeneralSubmit}></Sidebar>
        <CvSection info={generalInfo}></CvSection>
      </div>
    </>
  );
}

export default App;
