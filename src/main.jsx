import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Sidebar from "./components/Sidebar.jsx";
import CvSection from "./components/CvSection.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <header>
      <h1>CV Application</h1>
    </header>
    <div className="flex-row">
      <Sidebar></Sidebar>
      <CvSection></CvSection>
    </div>
  </StrictMode>
);
