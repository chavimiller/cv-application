import { useState } from "react";
import Button from "./Button";

function Education() {
  const [mode, setMode] = useState("edit");

  const [schoolName, setSchoolName] = useState("");
  const [studyArea, setStudyArea] = useState("");
  const [degree, setDegree] = useState("");
  const [dates, setDates] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setMode(mode === "edit" ? "view" : "edit");
  }

  if (mode === "edit") {
    return (
      <>
        <h1>Education</h1>
        <form className="form-box">
          <label>
            Name of School:
            <input
              name="schoolName"
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
            />
          </label>
          <label>
            Area of Study:
            <input
              name="studyArea"
              value={studyArea}
              onChange={(e) => setStudyArea(e.target.value)}
            />
          </label>
          <label>
            Degree:
            <input
              name="degreeType"
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
            />
          </label>
          <label>
            Dates:
            <input
              name="dates"
              value={dates}
              onChange={(e) => setDates(e.target.value)}
            />
          </label>
          <Button text="Submit" onClick={handleSubmit} />
          <Button text="Remove Education" />
        </form>
      </>
    );
  } else {
    return (
      <>
        <div>
          <h1>Education</h1>
          <div>{schoolName}</div>
          <div>{studyArea}</div>
          <div>{degree}</div>
          <div>{dates}</div>
          <Button text="Edit" onClick={handleSubmit} />
        </div>
      </>
    );
  }
}

export default Education;
