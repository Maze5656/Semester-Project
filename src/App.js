import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar'
import logo1 from './logo.png';


class App extends Component {
  render() {
    return (
        <div className="Wrapper">
          <div className="App">
              <img className="shopLogo" src={logo1} />
                <h1>
                    Record and Tape Traders
                </h1>
            <div className="App-header">
                <div className="Navigation">
                    <NavBar />
                </div>
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
