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
        <h1>General</h1>
        <form className="form-box">
          <label>
            Full Name:
            <input
              name="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </label>
          <label>
            Email:
            <input
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Phone Number:
            <input
              name="phoneNumber"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
          <Button text="Submit" onClick={handleSubmit} />
        </form>
      </>
    );
  } else {
    return (
      <>
        <h1>{fullName}</h1>
        <div>{email}</div>
        <div>{phone}</div>
        <Button text="Edit" onClick={handleSubmit} />
      </>
    );
  }
}

export default General;
