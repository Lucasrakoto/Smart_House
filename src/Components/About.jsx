import React from "react";
import Img from "../Assets/rectangle.png";
export default function About() {
  return (
    <div className="about">
      <figure>
        <img src={Img} alt="" />
      </figure>
      <figcaption>
        <h1>About the project</h1>
        <p>
          A smart house, often referred to as a smart home, represents a
          cutting-edge evolution in residential living. It integrates advanced
          technology and automation into various aspects of everyday life,
          offering residents a heightened level of convenience, comfort,
          security, and energy efficiency. In a smart house, a network of
          interconnected devices, sensors, and systems work together to create
          an environment that can be controlled remotely, adapt to your needs,
          and respond intelligently to changing circumstances. These homes are
          designed to simplify daily tasks, enhance the quality of life, and
          even reduce energy consumption. They can include features such as
          voice-activated virtual assistants, smart lighting, climate control,
          home security systems, and entertainment setups, all seamlessly
          integrated into one cohesive system. Smart houses are highly
          customizable, allowing residents to tailor their living space to their
          preferences and needs, whether that involves controlling the lights
          with a voice command, checking security cameras from a mobile app, or
          optimizing heating and cooling systems for energy savings.
        </p>
      </figcaption>
    </div>
  );
}
