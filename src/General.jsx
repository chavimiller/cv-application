import { useState } from "react";
import Button from "./Button";

function General({ generalData, onUpdateGeneral }) {
  const [mode, setMode] = useState("edit");

  function handleInputChange(field, value) {
    onUpdateGeneral({
      ...generalData,
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
            <label htmlFor="fullName">Full Name:</label>
            <input
              id="fullName"
              name="fullName"
              value={generalData.fullName || ""}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              value={generalData.email || ""}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              value={generalData.phoneNumber || ""}
              onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
            />
          </div>
          <Button className={"btn-main"} text="Submit" onClick={handleSubmit} />
        </form>
      </>
    );
  } else {
    return (
      <>
        <div className="submit-info">
          <div>Full name: {generalData.fullName}</div>
          <div>Email: {generalData.email}</div>
          <div>Phone number: {generalData.phoneNumber}</div>
          <Button className={"btn-edit"} text="Edit" onClick={handleSubmit} />
        </div>
      </>
    );
  }
}

export default General;
