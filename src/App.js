import React from "react";
import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import { Emailjs } from "./Components/Emailjs";
import Contact from "./Components/Contact";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <Home />
        <About />
        <Emailjs />
        <Contact/>
      </div>
    </React.Fragment>
  );
}

export default App;
