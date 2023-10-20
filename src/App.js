import React from "react";
import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <Home />
        <About />
      </div>
    </React.Fragment>
  );
}

export default App;
