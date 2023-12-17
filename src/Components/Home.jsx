import React from "react";
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import logo from "../Assets/ispm.png";
import logohome from "../Assets/logohome.jpg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/SendIcon';


export default function Home(props) {
  const el = useRef(null);
  const [className, setClassName] = useState("modal");
  const [username, setUserName] = useState("");
  const [mdp, setMdp] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const typed = new Typed(el.current, {
  //     strings: ["MODERN", "SMART ", "INTELLIGENT "],
  //     startDelay: 300,
  //     typeSpeed: 150,
  //     backSpeed: 100,
  //     backDelay: 100,
  //     smartBackspace: true,
  //     loop: true,
  //     showCursor: false,
  //     // cursorChar: "_",
  //   });
  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);

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
      toast.success("Welcome, you are connected !", {
        position: "top-right",
        autoClose: 3000, // Durée d'affichage en millisecondes
      });
      setTimeout(() => {
        closeModal();

        // alert("Welcome  " + username);
        // props.setProps(true);
      }, 1500);
    } else {
      // alert("non nefa");
      toast.error("Ouuuupsss, error", {
        position: "top-right",
        autoClose: 2000, // Durée d'affichage en millisecondes
      });
    }
  };
  const logout = () => {
    // alert("See you " + username);
    toast.success("See you!, you are deconnected", {
      position: "top-right",
      autoClose: 2000, // Durée d'affichage en millisecondes
    });
    setTimeout(() => {
      setIsLoggedIn(false);
      setUserName("");
      setMdp("");
    }, 1000);
  };
  const changeAo = () => {
    props.setProps();
    // alert(props.aove);
    toast.success("You are in the dashboard ", {
      position: "top-right",
      autoClose: 3000, // Durée d'affichage en millisecondes
    });
  };
  return (
    <div className="home">
      {/* section navbar */}
      <nav>
        <ul className="navbar">
          <li>
            <a href="#_Home">Home</a>
          </li>
          <li>
            <a href="#_About">Settings</a>
          </li>

          {isLoggedIn && (
            <li>
              <button onClick={changeAo}>Dashboard</button>
              {/* <button onClick={changeAo}>Dashboard</button> */}
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
            <h1>Welcome</h1>
            <form onSubmit={onSingnin}>
              <input
                type="text"
                name="user_name"
                placeholder="E-mail adress"
                className="_input"
                onChange={handleChange}
                value={username}
                required
              />

              {/* <button type="submit" className="signin">
                SUBMIT
              </button> */}

              <Button variant="contained" endIcon={<SendIcon />} className="signin">
                  SUBMIT
              </Button>

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
