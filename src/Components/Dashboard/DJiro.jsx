import React from "react";

export default function DJiro() {
  return (
    <div className="djiro">
      <form action="#">
        <ul>
          <li>
            <input id="salon" type="radio" name="option" value="salon" />
            <label for="salon">
              <h1>Piece 1</h1>
            </label>
            <p id="etat1"></p>
          </li>
          <li>
            <input id="room1" type="radio" name="option" value="chambre1" />
            <label for="room1">
              <h1>Piece 2</h1>
            </label>
            <p id="etat3"></p>
          </li>
          <li>
            <input id="cuisine" type="radio" name="option" value="cuisine" />
            <label for="cuisine">
              <h1>Piece 3</h1>
            </label>
            <p id="etat2"></p>
          </li>

          <li>
            <input id="room2" type="radio" name="option" value="chambre2" />
            <label for="room2">
              <h1>Piece 4 </h1>
            </label>
            <p id="etat4"></p>
          </li>
        </ul>
        <div class="btn">
          <button class="button" onclick="sendOpen()" type="button">
            ON
          </button>
          <button class="buttonOff" onclick="sendClose()" type="button">
            OFF
          </button>
          {/* <input type="range" id="myRange" min="0" max="180" value="50" /> */}
        </div>
        {/* <button type="reset" class="reset" id="sortirPiece" onclick="exit()">
          Sortir de la piece <span id="piece"></span>
        </button> */}
      </form>
    </div>
  );
}
