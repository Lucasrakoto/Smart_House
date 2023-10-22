import React from "react";
import { useState, useEffect } from "react";
import logoispm from "../Assets/ispm.png";

export default function Load() {
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoad(false);
    }, 5000);
  }, [isLoad]);
  return (
    <div className={isLoad ? "load" : "loaded"}>
      {/* <div className="load"> */}
      <h1>HOUSE SECURITY</h1>
      <figure className="img_load">
        <img src={logoispm} alt="" />
      </figure>
    </div>
  );
}
