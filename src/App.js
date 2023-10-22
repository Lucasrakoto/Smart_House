import React from "react";
import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import Team from "./Components/Team";
import Load from "./Components/Load";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <React.Fragment>
      <Load />
      <div className="container">
        {/* <Home />
        <About />
        <Team /> */}
        <Dashboard />
      </div>
    </React.Fragment>
  );
}

export default App;
