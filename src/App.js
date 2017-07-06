import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar'
import logo1 from './logo.png';

class App extends Component {
  render() {
    return (
        <div className="Wrapper">
          <div className="App">
              <img className="shopLogo" src={logo1} />
                <h1/>
            <div className="App-header">
                <div className="Navigation">
                    <NavBar />
                </div>
            </div>
            <p className="App-intro">
              <em>Under-Construction</em>
            </p>
          </div>
        </div>
    );
  }
}

export default App;
