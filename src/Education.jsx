import { useState } from "react";
import Button from "./Button";

function Education({ id, onRemove }) {
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
        <form className="form-box">
          <div className="input-group">
            <label htmlFor="schoolName">Name of School:</label>
            <input
              id="schoolName"
              name="schoolName"
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="studyArea">Area of Study:</label>
            <input
              id="studyArea"
              name="studyArea"
              value={studyArea}
              onChange={(e) => setStudyArea(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="degreeType">Degree:</label>
            <input
              id="degreeType"
              name="degreeType"
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="dates">Dates:</label>
            <input
              id="dates"
              name="dates"
              value={dates}
              onChange={(e) => setDates(e.target.value)}
            />
          </div>
          <div className="btn-group">
            <Button
              className={"btn-main"}
              text="Submit"
              onClick={handleSubmit}
            />
            <Button
              className={"btn-remove"}
              text="Remove Education"
              onClick={() => onRemove(id)}
            />
          </div>
        </form>
      </>
    );
  } else {
    return (
      <>
        <div className="submit-info">
          <div>Name of school: {schoolName}</div>
          <div>Area of study: {studyArea}</div>
          <div>Degree type: {degree}</div>
          <div>Dates of attendance: {dates}</div>
          <Button className={"btn-edit"} text="Edit" onClick={handleSubmit} />
        </div>
      </>
    );
  }
}

export default Education;
