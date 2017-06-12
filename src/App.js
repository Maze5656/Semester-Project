import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <title>A title</title>
            <h1>
                Welcome
            </h1>
          <pre className="Navigation">
              <p>
                  <a href="#">  Membership  </a>|
                  <a href="#">  Calendar  </a>|
                  <a href="#">  About  </a>
              </p>
          </pre>
        <div className="App-header">
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
