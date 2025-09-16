import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import General from "./General";
import Education from "./Education";
import Experience from "./Experience";
import Button from "./Button";

function App() {
  const addEducation = () => {
    return <Education />;
  };

  return (
    <>
      <General />
      <Button text="Add Education" onClick={handleClick(addEducation)} />
      <Education />
      <Experience />
    </>
  );
}

export default App;
