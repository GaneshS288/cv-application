import GeneralInfo from "./General-info.jsx";
import "../styles/CvSection.css";

export default function CvSection() {
  return (
    <div className="cv-page">
      <GeneralInfo
        fullName={"Ganesh"}
        email={"1234@gmail.com"}
        phone={"12345678"}
      ></GeneralInfo>
    </div>
  );
}
