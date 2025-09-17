import { useState } from "react";
import Button from "./Button";

function Education({ educationData, onUpdate, onRemove }) {
  const [mode, setMode] = useState("edit");

  function handleInputChange(field, value) {
    onUpdate({
      ...educationData,
      [field]: value,
    });
  }

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
              value={educationData.schoolName || ""}
              onChange={(e) => handleInputChange("schoolName", e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="studyArea">Area of Study:</label>
            <input
              id="studyArea"
              name="studyArea"
              value={educationData.studyArea || ""}
              onChange={(e) => handleInputChange("studyArea", e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="degreeType">Degree:</label>
            <input
              id="degreeType"
              name="degreeType"
              value={educationData.degree || ""}
              onChange={(e) => handleInputChange("degree", e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="dates">Dates:</label>
            <input
              id="dates"
              name="dates"
              value={educationData.dates || ""}
              onChange={(e) => handleInputChange("dates", e.target.value)}
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
              onClick={() => onRemove(educationData.id)}
            />
          </div>
        </form>
      </>
    );
  } else {
    return (
      <>
        <div className="submit-info">
          <div>Name of school: {educationData.schoolName}</div>
          <div>Area of study: {educationData.studyArea}</div>
          <div>Degree type: {educationData.degree}</div>
          <div>Dates of attendance: {educationData.dates}</div>
          <Button className={"btn-edit"} text="Edit" onClick={handleSubmit} />
        </div>
      </>
    );
  }
}

export default Education;
