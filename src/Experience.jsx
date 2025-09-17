import { useState } from "react";
import Button from "./Button";

function Experience({ experienceData, onUpdate, onRemove }) {
  const [mode, setMode] = useState("edit");

  function handleInputChange(field, value) {
    onUpdate({
      ...experienceData,
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
            <label htmlFor="companyName">Company Name:</label>
            <input
              id="companyName"
              name="companyName"
              value={experienceData.companyName}
              onChange={(e) => handleInputChange("companyName", e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="title">Title:</label>
            <input
              id="title"
              name="title"
              value={experienceData.title}
              onChange={(e) => handleInputChange("title", e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="employmentDates">Dates of Employment:</label>
            <input
              id="employmentDates"
              name="employmentDates"
              value={experienceData.dates}
              onChange={(e) => handleInputChange("dates", e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="responsibilities">Responsibilities:</label>
            <textarea
              id="responsibilities"
              name="responsibilities"
              value={experienceData.detail}
              onChange={(e) => handleInputChange("detail", e.target.value)}
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
              text="Remove Experience"
              onClick={() => onRemove(experienceData.id)}
            />
          </div>
        </form>
      </>
    );
  } else {
    return (
      <>
        <div className="submit-info">
          <div>{experienceData.companyName}</div>
          <div>{experienceData.title}</div>
          <div>{experienceData.dates}</div>
          <div>{experienceData.detail}</div>
          <Button className={"btn-edit"} text="Edit" onClick={handleSubmit} />
        </div>
      </>
    );
  }
}

export default Experience;
