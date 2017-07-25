import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar'
import logo1 from './logo.png';
import Thermometer from './Thermometer';
import 'bulma/css/bulma.css';
import YouTube from './Youtube';

class App extends Component {

  render() {
      return (
        <div className="Wrapper">
          <div className="App">
              <img className="shopLogo" src={logo1} alt="R&TT Logo" />
                <h1/>
            <div className="App-header">
                <NavBar />
            </div>
              <section className="section">
                  <div className="columns">
                      <div className="column is-one-quarter">
                          <strong>Watch a video while you browse:</strong>
                      </div>
                      <div className="column">
                          <YouTube videoId="qN80_7rNmcE"/>
                      </div>
                      <div className="column is-one-quarter">
                          <div className="Temperature">
                              <em>The current temperature in your area:</em>
                              <Thermometer/>
                          </div>
                      </div>
                  </div>
              </section>
          </div>
        </div>
    );
  }
}

export default App;