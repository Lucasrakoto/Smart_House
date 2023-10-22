import React from 'react';
import axios from 'axios';

class App extends React.Component {
  allumerDispositif() {
    axios.get('http://adresse_IP_ESP8266/allumer')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  eteindreDispositif() {
    axios.get('http://adresse_IP_ESP8266/eteindre')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        <button onClick={this.allumerDispositif}>Allumer</button>
        <button onClick={this.eteindreDispositif}>Éteindre</button>
      </div>
    );
  }
}

export default App;
