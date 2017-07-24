import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar'
import logo1 from './logo.png';
import Thermometer from './Thermometer';

class App extends Component {

  render() {
      return (
        <div className="Wrapper">
          <div className="App">
              <img className="shopLogo" src={logo1} alt="R&TT Logo" />
                <h1/>
            <div className="App-header">
                <div className="Navigation">
                    <NavBar />
                </div>
            </div>
            <div className="Temperature">
                <em>The current temperature in your area:</em>
                <Thermometer/>
            </div>
          </div>
        </div>
    );
  }
}

export default App;