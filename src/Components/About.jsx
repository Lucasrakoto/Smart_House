import React, { useState, useEffect } from "react";
import Img from "../Assets/rectangle.png";
import boky from "../Assets/smartHouse.pdf";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div id="_About" className="about">
      <figure data-aos="fade-right">
        <img src={Img} alt="" />
      </figure>
      <figcaption data-aos="fade-up">
        <h1 data-aos="fade-up">About the project</h1>
        <p data-aos="fade-up">
          A smart house, often referred to as a smart home, represents a
          cutting-edge evolution in residential living. It integrates advanced
          technology and automation into various aspects of everyday life,
          offering residents a heightened level of convenience, comfort,
          security, and energy efficiency. In a smart house, a network of
          interconnected devices, sensors, and systems work together to create
          an environment that can be controlled remotely, adapt to your needs,
          and respond intelligently to changing circumstances. These homes are
          designed to simplify daily tasks, enhance the quality of life, and
          even reduce energy consumption.
        </p>
        <a href={boky} download>
          More
        </a>
      </figcaption>
    </div>
  );
}
