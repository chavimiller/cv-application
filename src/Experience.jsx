import { useState } from "react";
import Button from "./Button";

function Experience() {
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
        <h1>Experience</h1>
        <form className="form-box">
          <label>
            Company Name:{" "}
            <input
              name="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </label>
          <label>
            Title:{" "}
            <input
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label>
            Dates of Employment:{" "}
            <input
              name="employmentDates"
              value={dates}
              onChange={(e) => setDates(e.target.value)}
            />
          </label>
          <label>
            Responsibilities:
            <textarea
              name="responsibilities"
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
            />
          </label>
          <Button text="Submit" onClick={handleSubmit} />
          <Button text="Remove Experience" />
        </form>
      </>
    );
  } else {
    return (
      <>
        <h1>Experience</h1>
        <div>{companyName}</div>
        <div>{title}</div>
        <div>{dates}</div>
        <div>{detail}</div>
        <Button text="Edit" onClick={handleSubmit} />
      </>
    );
  }
}

export default Experience;
