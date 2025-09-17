import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import General from "./General";
import Education from "./Education";
import Experience from "./Experience";
import Button from "./Button";

function App() {
  // General
  const [generalData, setGeneralData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });

  function updateGeneral(newData) {
    setGeneralData(newData);
  }

  // Education
  const [educations, setEducations] = useState([
    {
      id: 1,
      schoolName: "",
      studyArea: "",
      degree: "",
      dates: "",
    },
  ]);

  function addEducation() {
    const newEducation = {
      id: Date.now(),
      schoolName: "",
      studyArea: "",
      degree: "",
      dates: "",
    };
    setEducations([...educations, newEducation]);
  }

  function updateEducation(newData) {
    setEducations(
      educations.map((edu) => (edu.id === newData.id ? newData : edu))
    );
  }

  function removeEducation(id) {
    setEducations(educations.filter((edu) => edu.id !== id));
  }

  // Experience

  const [experiences, setExperiences] = useState([
    {
      id: 1,
      companyName: "",
      title: "",
      dates: "",
      detail: "",
    },
  ]);

  function addExperience() {
    const newExperience = {
      id: Date.now(),
      companyName: "",
      title: "",
      dates: "",
      detail: "",
    };
    setExperiences([...experiences, newExperience]);
  }

  function updateExperience(newData) {
    setExperiences(
      experiences.map((exp) => (exp.id === newData.id ? newData : exp))
    );
  }

  function removeExperience(id) {
    setExperiences(experiences.filter((exp) => exp.id !== id));
  }

  return (
    <>
      <div className="main-container">
        <div className="left-side">
          <h1 className="submit-info">General</h1>
          <General generalData={generalData} onUpdateGeneral={updateGeneral} />
          <h1 className="submit-info">Education</h1>
          {educations.map((education) => (
            <Education
              key={education.id}
              educationData={education}
              onUpdate={updateEducation}
              onRemove={removeEducation}
            />
          ))}
          <Button
            className={"btn-add submit-info"}
            text="Add Education"
            onClick={addEducation}
          />
          <h1 className="submit-info">Experience</h1>
          {experiences.map((experience) => (
            <Experience
              key={experience.id}
              experienceData={experience}
              onUpdate={updateExperience}
              onRemove={removeExperience}
            />
          ))}
          <Button
            className={"btn-add submit-info"}
            text="Add Experience"
            onClick={addExperience}
          />
        </div>
        <div className="right-side">
          <div className="general-info">
            <div>{generalData.fullName}</div>
            <div>{generalData.email}</div>
            <div>{generalData.phoneNumber}</div>
          </div>
          <div className="Education">
            {educations.map((copy) => (
              <>
                <div key={copy.id}>{copy.schoolName}</div>
                <div key={copy.id}>{copy.studyArea}</div>
                <div key={copy.id}>{copy.degree}</div>
                <div key={copy.id}>{copy.dates}</div>
              </>
            ))}
          </div>
          <div className="Experience">
            {experiences.map((copy) => (
              <>
                <div key={copy.id}>{copy.companyName}</div>
                <div key={copy.id}>{copy.title}</div>
                <div key={copy.id}>{copy.dates}</div>
                <div key={copy.id}>{copy.detail}</div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
