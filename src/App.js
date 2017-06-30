import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar'
import { Events, img2, img3, img4 } from './Events'
import logo1 from './logo.png';

class App extends Component {
  render() {
    return (
        <div>
          <div className="App">
              <img className="shopLogo" src={logo1} />
                <h1>
                    Record and Tape Traders
                </h1>
              <NavBar />
            <div className="App-header">
                <Events />
            </div>
            <p className="App-intro">
              <em>Under-Construction</em>
            </p>
              <img src={logo} className="App-logo" alt="logo" />
          </div>
        </div>
    );
  }
}

export default App;
