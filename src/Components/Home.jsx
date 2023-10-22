import React from "react";
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import logo from "../Assets/ispm.png";
import logohome from "../Assets/logohome.jpg";

export default function Home() {
  const el = useRef(null);
  const [className, setClassName] = useState("modal");
  const [username, setUserName] = useState("");
  const [mdp, setMdp] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["MODERN", "SMART ", "INTELLIGENT "],
      startDelay: 300,
      typeSpeed: 150,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: false,
      // cursorChar: "_",
    });
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

  const handleChange = (e) => {
    setUserName(e.currentTarget.value);
  };
  const handleMdpChange = (e) => {
    setMdp(e.currentTarget.value);
  };
  const onSingnin = (e) => {
    e.preventDefault();
    const name = "Lucasrakoto";
    const pswd = "1234";
    if (username === name && mdp === pswd) {
      setIsLoggedIn(true);
      setTimeout(() => {
        closeModal();
        alert("Welcome  " + username);
      }, 2000);
    } else {
      alert("non nefa");
    }
  };
  const logout = () => {
    alert("See you " + username);
    setTimeout(() => {
      setIsLoggedIn(false);
      setUserName("");
      setMdp("");
    }, 1000);
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
            <a href="#_Home">Home</a>
          </li>
          <li>
            <a href="#_About">About</a>
          </li>
          <li>
            <a href="#_OurTeam">Our Team</a>
          </li>
          <li>
            <a href="#_Contact">Contact Us</a>
          </li>
          {isLoggedIn && (
            <li>
              <a href="#_Dashboard">Dashboard</a>
            </li>
          )}
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
        {isLoggedIn ? (
          <button onClick={logout} className="login">
            LOGOUT
          </button>
        ) : (
          <button
            onClick={() => {
              showModal();
            }}
            className="login"
          >
            LOGIN
          </button>
        )}

        {/* modal  */}
        <div className={className}>
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <div className="modal-content">
            <figure>
              <img src={logohome} alt="" />
            </figure>
            {/* <form ref={form} onSubmit={sendEmail}> */}
            <h1>Welcome to Smart House</h1>
            <form onSubmit={onSingnin}>
              <input
                type="text"
                name="user_name"
                placeholder="User name"
                className="_input"
                onChange={handleChange}
                value={username}
                required
              />
              <input
                type="password"
                name="user_email"
                placeholder="Password"
                className="_input"
                onChange={handleMdpChange}
                value={mdp}
                required
              />
              <button type="submit" className="signin">
                SIGN IN
              </button>

              {/* <input type="submit" value="Send" /> */}
            </form>
          </div>
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
