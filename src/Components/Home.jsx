import React from "react";
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import logo from "../Assets/ispm.png";

export default function Home() {
  const el = useRef(null);
  const [className, setClassName] = useState("modal");
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["MODERN", "SMART ", "INTELLIGENT "],
      startDelay: 300,
      typeSpeed: 150,
      backSpeed: 100,
      backDelay: 100,

      /*** */
      smartBackspace: true,
      loop: true,
      showCursor: false,
      // cursorChar: "_",
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  // resaka modal
  const showModal = () => {
    const classNames = "showModal";
    setClassName(classNames);
  };
  const closeModal = () => {
    const classNames = "modal";
    setClassName(classNames);
  };

  return (
    <div className="home">
      {/* section navbar */}
      <nav>
        <figure>
          <img src={logo} alt="" />
        </figure>
        <ul className="navbar">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact </a>
          </li>
        </ul>
      </nav>

      {/* section acceuil */}
      <section className="sec_title">
        <h1>
          <span ref={el}></span>
          <br /> <span>HOUSE</span>
        </h1>
        <p>
          Modern Security Systeme <br />
          The future technology <br />
          Project 3.0
        </p>
        <button
          onClick={() => {
            showModal();
          }}
        >
          LOGIN
        </button>

        {/* modal  */}
        <div className={className}>
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <div className="modal-content"></div>
        </div>

        {/* box animation */}
        <div className="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
    </div>
  );
}
