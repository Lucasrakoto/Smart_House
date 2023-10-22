import React, { useState, useEffect } from "react";

function Led() {
  // État pour stocker la valeur de la chambre sélectionnée
  const [chambreValue, setChambreValue] = useState("");

  // État pour stocker la valeur de la plage
  const [rangeValue, setRangeValue] = useState(50);

  // Gestionnaire d'événement pour le changement d'option
  const handleOptionChange = (event) => {
    const selectedOption = event.target.value;
    setChambreValue(selectedOption); // Met à jour la chambre sélectionnée
    if (selectedOption !== "") {
      alert(selectedOption); // Affiche l'option sélectionnée
    } else {
      alert(""); // Affiche une alerte vide
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
      alert("Veuillez sélectionner une chambre");
    } else if (chambreValue === "salon") {
      alert("Fermeture pour " + chambreValue);
      xhr.open("GET", "http://192.168.63.208/manidySalon");

      // Ajoutez ici la logique pour envoyer la commande de fermeture au serveur
    } else if (chambreValue === "cuisine") {
      alert("Fermeture pour " + chambreValue);
      xhr.open("GET", "http://192.168.63.208/manidyCuisine");
    }
    xhr.send();
  };

  const sendOpen = () => {
    const xhr = new XMLHttpRequest();
    if (chambreValue === "") {
      alert("Veuillez sélectionner une chambre");
    } else if (chambreValue === "salon") {
      alert("Ouverture pour " + chambreValue);
      xhr.open("GET", "http://192.168.63.208/mandrehitraSalon");

      // Ajoutez ici la logique pour envoyer la commande d'ouverture au serveur
    } else if (chambreValue === "cuisine") {
      alert("Ouverture pour " + chambreValue);
      xhr.open("GET", "http://192.168.63.208/mandrehitraCuisine");
    }
    xhr.send();
  };
  return (
    <div>
      <button onClick={sendOpen}>Remettre</button>
      <button onClick={sendClose}>Couper</button>
      <ul>
        <li>
          <input
            type="radio"
            name="option"
            value="salon"
            checked={chambreValue === "salon"}
            onChange={handleOptionChange}
          />
          Salon
        </li>
        <li>
          <input
            type="radio"
            name="option"
            value="cuisine"
            checked={chambreValue === "cuisine"}
            onChange={handleOptionChange}
          />
          Cuisine
        </li>
      </ul>

      <input
        type="range"
        id="myRange"
        min="0"
        max="100"
        value={rangeValue}
        onChange={handleRangeChange}
      />
      <p id="rangeValue">{rangeValue}</p>
    </div>
  );
}

export default Led;
