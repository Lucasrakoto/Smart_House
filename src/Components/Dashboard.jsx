import React from "react";
import logo from "../Assets/ispm.png";
import { FaSignOutAlt, FaHome, FaLightbulb, FaIdCard } from "react-icons/fa";
import DHome from "./Dashboard/DHome";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <aside className="left">
        <figure>
          <img src={logo} alt="" />
        </figure>
        <nav>
          <ul>
            <li>
              <FaHome className="icn" />
              <a href="">Home</a>
            </li>
            <li>
              <FaLightbulb className="icn" />
              <a href="">Jiro</a>
            </li>
            <li>
              <FaIdCard className="icn" />
              <a href="">RFID</a>
            </li>
            <li>
              <FaSignOutAlt className="icn" />
              <a href="">Logout</a>
            </li>
          </ul>
        </nav>
      </aside>
      <section className="view_dashboard">
        <DHome />
      </section>
    </div>
  );
}
