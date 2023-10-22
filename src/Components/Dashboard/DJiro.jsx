import React from "react";
import donne from "../../Assets/js/rfid";
export default function DJiro() {
  const affiche = () => {
    console.log(donne.data);
  };
  return (
    <div className="djiro">
      <button onClick={affiche}>CLIK</button>
      {/* <section>
        <div className="container">
          <div className="coupure">
            <h2>Coupure</h2>
          </div>

          <div className="bloc2">
            <div className="bloc3">
              <div className="bloc4">
                <form action="#">
                  <div className="bloc5">
                    <button onclick="sendOpen()" type="button">
                      Remettre
                    </button>
                    <button onclick="sendClose()" type="button">
                      Couper
                    </button>
                    <input
                      type="range"
                      id="myRange"
                      min="0"
                      max="100"
                      value="50"
                    ></input>{" "}
                    <p id="rangeValue">a</p>
                  </div>
                  <div className="bloc6">
                    <div class="form-group">
                      <button type="submit">Liste des modules</button>
                      <ul>
                        <li>
                          <input type="radio" name="option" value="salon" />
                          Salon
                          <br />
                        </li>
                        <li>
                          <input type="radio" name="option" value="cuisine" />
                          Cuisine
                          <br />
                        </li>
                      </ul>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
