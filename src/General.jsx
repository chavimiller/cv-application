import { useState } from "react";
import Button from "./Button";

function General() {
  const [mode, setMode] = useState("edit");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

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
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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
          <div>Full name: {fullName}</div>
          <div>Email: {email}</div>
          <div>Phone number: {phone}</div>
          <Button className={"btn-edit"} text="Edit" onClick={handleSubmit} />
        </div>
      </>
    );
  }
}

export default General;
