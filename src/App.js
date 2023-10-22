import React, { useState, useEffect } from "react";
import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import Team from "./Components/Team";
import Load from "./Components/Load";
import Dashboard from "./Components/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [ao, setAo] = useState(true);
  const setprops = () => {
    setTimeout(() => {
      setAo(false);
    }, 2000);
  };
  const setyprops = () => {
    setTimeout(() => {
      setAo(true);
    }, 2000);
  };

  // useEffect(() => {}, []);

  return (
    <React.Fragment>
      <Load />
      {ao ? (
        <div className="container">
          <Home aove={ao} setProps={setprops} />
          <About />
          <Team />
        </div>
      ) : (
        <Dashboard aove={ao} setProps={setyprops} />
      )}
    </React.Fragment>
  );
}

export default App;
