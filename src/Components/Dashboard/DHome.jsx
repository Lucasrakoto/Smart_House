import React from "react";
import lucas1 from "../../Assets/profil/1.png";
import lucas2 from "../../Assets/profil/2.png";
import { FaSignOutAlt, FaHome, FaLightbulb, FaIdCard } from "react-icons/fa";

export default function DHome() {
  return (
    <div className="Dhome">
      <h1>Welcome home!</h1>
      <section className="led_state">
        <h2>State of your Led in different piece</h2>
        <ul className="list_led">
          <li className="led_item">
            <FaLightbulb className="jiro" />
            <span>Piece 1</span>
          </li>
          <li className="led_item">
            <FaLightbulb className="jiro" />
            <span>Piece 2</span>
          </li>
          <li className="led_item">
            <FaLightbulb className="jiro" />
            <span>Piece 3</span>
          </li>
          <li className="led_item">
            <FaLightbulb className="jiro" />
            <span>Piece 4</span>
          </li>
        </ul>
      </section>
      <section className="rfid_state">
        <h2>Acces management view : Person actif</h2>
        <ul className="list_person">
          <li className="person">
            <figure>
              <img src={lucas1} alt="" />
            </figure>
            <figcaption>
              <p>Nom lav Lucas</p>
            </figcaption>
          </li>
          <li className="person">
            <figure>
              <img src={lucas2} alt="" />
            </figure>
            <figcaption>
              <p>RAKOTlvakOto</p>
            </figcaption>
          </li>
        </ul>
      </section>
    </div>
  );
}
