import { useState } from "react";
import Button from "./Button";

function Experience({ id, onRemove }) {
  const [mode, setMode] = useState("edit");

  const [companyName, setCompanyName] = useState("");
  const [title, setTitle] = useState("");
  const [dates, setDates] = useState("");
  const [detail, setDetail] = useState("");

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
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="title">Title:</label>
            <input
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="employmentDates">Dates of Employment:</label>
            <input
              id="employmentDates"
              name="employmentDates"
              value={dates}
              onChange={(e) => setDates(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="responsibilities">Responsibilities:</label>
            <textarea
              id="responsibilities"
              name="responsibilities"
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
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
          <div>{companyName}</div>
          <div>{title}</div>
          <div>{dates}</div>
          <div>{detail}</div>
          <Button className={"btn-edit"} text="Edit" onClick={handleSubmit} />
        </div>
      </>
    );
  }
}

export default Experience;
