import React from "react";
import logo from "../Assets/ispm.png";
import jiro from "../Assets/led.png";
import { FaSignOutAlt, FaHome, FaLightbulb, FaIdCard } from "react-icons/fa";
import Clock from "./Clock";
import Date from "./Date";
import Led from "./Led";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Dashboard(props) {
  const logouty = () => {
    // alert(props.aove);
    toast.success("You are deconnected!", {
      position: "top-right",
      autoClose: 3000, // Durée d'affichage en millisecondes
    });
    props.setProps();
  };
  // État pour stocker la valeur de la chambre sélectionnée
  const [chambreValue, setChambreValue] = useState("");

  // État pour stocker la valeur de la plage
  const [rangeValue, setRangeValue] = useState(50);

  // Gestionnaire d'événement pour le changement d'option
  const handleOptionChange = (event) => {
    const selectedOption = event.target.value;
    setChambreValue(selectedOption); // Met à jour la chambre sélectionnée
    if (selectedOption !== "") {
      // alert(selectedOption); // Affiche l'option sélectionnée
      toast.success(selectedOption + " selectionné", {
        position: "top-center",
        autoClose: 1500, // Durée d'affichage en millisecondes
      });
    } else {
      toast.warning("Warning", {
        position: "top-center",
        autoClose: 1500, // Durée d'affichage en millisecondes
      }); // Affiche une alerte vide
    }
  };

  // Gestionnaire d'événement pour le changement de la plage de valeurs
  const handleRangeChange = (event) => {
    const value = event.target.value;
    setRangeValue(value); // Met à jour la valeur de la plage
    // Vous pouvez ajouter ici la logique pour envoyer la valeur au serveur
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `http://192.168.63.208/${value}`);
    xhr.send();
  };

  // Utilisez useEffect pour émuler document.addEventListener('DOMContentLoaded')
  useEffect(() => {
    // Équivalent de document.getElementById("myRange")
    const rangeInput = document.getElementById("myRange");

    // Équivalent de document.getElementById("rangeValue")
    const rangeValue = document.getElementById("rangeValue");

    // Ajoute un écouteur d'événement pour le changement de plage
    rangeInput.addEventListener("input", handleRangeChange);

    // Nettoie l'écouteur d'événement lorsque le composant est démonté
    return () => {
      rangeInput.removeEventListener("input", handleRangeChange);
    };
  }, []); // Le tableau vide [] garantit que cela s'exécute une seule fois à l'initialisation

  const sendClose = () => {
    const xhr = new XMLHttpRequest();
    if (chambreValue === "") {
      // alert("Veuillez sélectionner une chambre");
      toast.error("Veuillez sélectionner une chambre!", {
        position: "top-center",
        autoClose: 2000, // Durée d'affichage en millisecondes
      });
    } else if (chambreValue === "salon") {
      // alert("Fermeture pour " + chambreValue);
      toast.error(chambreValue + " etteint ", {
        position: "top-center",
        autoClose: 3000, // Durée d'affichage en millisecondes
      });
      xhr.open("GET", "http://192.168.63.208/manidySalon");

      // Ajoutez ici la logique pour envoyer la commande de fermeture au serveur
    } else if (chambreValue === "cuisine") {
      // alert("Fermeture pour " + chambreValue);
      toast.error(chambreValue + " etteint ", {
        position: "top-center",
        autoClose: 3000, // Durée d'affichage en millisecondes
      });
      xhr.open("GET", "http://192.168.63.208/manidyCuisine");
    }
    xhr.send();
  };

  const sendOpen = () => {
    const xhr = new XMLHttpRequest();
    if (chambreValue === "") {
      // alert("Veuillez sélectionner une chambre");
      toast.error("Veuillez sélectionner une chambre!", {
        position: "top-center",
        autoClose: 2000, // Durée d'affichage en millisecondes
      });
    } else if (chambreValue === "salon") {
      // alert("Ouverture pour " + chambreValue);
      toast.success(chambreValue + " allumée ", {
        position: "top-center",
        autoClose: 3000, // Durée d'affichage en millisecondes
      });
      xhr.open("GET", "http://192.168.63.208/mandrehitraSalon");

      // Ajoutez ici la logique pour envoyer la commande d'ouverture au serveur
    } else if (chambreValue === "cuisine") {
      // alert("Ouverture pour " + chambreValue);
      toast.success(chambreValue + " allumée ", {
        position: "top-center",
        autoClose: 3000, // Durée d'affichage en millisecondes
      });
      xhr.open("GET", "http://192.168.63.208/mandrehitraCuisine");
    }
    xhr.send();
  };
  return (
    <div className="dashboard">
      {/* <aside className="left">
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
              <button onClick={logouty}>Logout</button>
            </li>
          </ul>
        </nav>
      </aside>
      <section className="view_dashboard">
        <Led />
      </section>
      <aside className="right"></aside> */}
      <div className="big_box">
        <nav className="big_box_navbar">
          <figure>
            <img src={logo} alt="" />
          </figure>
          <h1>Welcome home!</h1>
          <button onClick={logouty}>
            <FaSignOutAlt /> <span>Logout</span>
          </button>
        </nav>
        <aside className="left">
          <div className="left_title">
            <figure>
              <img src={jiro} alt="" />
            </figure>
            <figcaption>
              <h2>Remote Home Control</h2>
            </figcaption>
          </div>
          <ul>
            <li>
              <input
                type="radio"
                name="option"
                value="salon"
                checked={chambreValue === "salon"}
                onChange={handleOptionChange}
              />
              Room 1
            </li>
            <li>
              <input
                type="radio"
                name="option"
                value="cuisine"
                checked={chambreValue === "cuisine"}
                onChange={handleOptionChange}
              />
              Room 2
            </li>
            <li>
              <input type="radio" />
              Room 3
            </li>
            <li>
              <input type="radio" />
              Room 4
            </li>
            <li>
              {" "}
              <input
                type="range"
                id="myRange"
                min="0"
                max="100"
                value={rangeValue}
                onChange={handleRangeChange}
              />
              Saturation
            </li>
          </ul>
          <div className="bouton">
            <button className="buttonOn" onClick={sendOpen}>
              ON
            </button>
            <button className="buttonOff" onClick={sendClose}>
              OFF
            </button>
          </div>
        </aside>

        <div className="daty">
          <div className="heure">
            <Clock />
          </div>
          <div className="date">
            <Date />
          </div>
        </div>
      </div>
    </div>
  );
}
