import React from "react";
import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import { Emailjs } from "./Components/Emailjs";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <Home />
        <About />
        <Emailjs />
      </div>
    </React.Fragment>
  );
}

export default App;
