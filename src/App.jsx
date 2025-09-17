import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import General from "./General";
import Education from "./Education";
import Experience from "./Experience";
import Button from "./Button";

function App() {
  const [educations, setEducations] = useState([1]);
  const [experiences, setExperiences] = useState([1]);

  function addEducation() {
    setEducations([...educations, Date.now()]);
  }

  function removeEducation(id) {
    setEducations(educations.filter((eduId) => eduId !== id));
  }

  function addExperience() {
    setExperiences([...experiences, Date.now()]);
  }

  function removeExperience(id) {
    setExperiences(experiences.filter((expId) => expId !== id));
  }
  return (
    <>
      <div className="main-container">
        <div className="left-side">
          <h1 className="submit-info">General</h1>
          <General />
          <h1 className="submit-info">Education</h1>
          {educations.map((id) => (
            <Education key={id} id={id} onRemove={removeEducation} />
          ))}
          <Button
            className={"btn-add submit-info"}
            text="Add Education"
            onClick={addEducation}
          />
          <h1 className="submit-info">Experience</h1>
          {experiences.map((id) => (
            <Experience key={id} id={id} onRemove={removeExperience} />
          ))}
          <Button
            className={"btn-add submit-info"}
            text="Add Experience"
            onClick={addExperience}
          />
        </div>
        <div className="right-side"></div>
      </div>
    </>
  );
}

export default App;
