import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar'

class App extends Component {
  render() {
    return (
        <div>
          <div className="App">
                <h1>
                    Record and Tape Traders
                </h1>
              <NavBar />
            <div className="App-header">
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
