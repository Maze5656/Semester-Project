import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//var NavBar = require('./NavBar') // import NavBar class
import NavBar from './NavBar'

var ProfilePage = React.createClass({
    render: function () {
        return (
            <div>
                <NavBar /> // instance of the NavBar class
                <h1>New Page Welcome</h1>
            </div>
        );
    }
});

class App extends Component {
  render() {
    return (
        <div> // Single root element
          <div className="App">
              <NavBar />
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
              <em>Under-Construction</em>
            </p>
              <img src={logo} className="App-logo" alt="logo" />
          </div>
        </div>
    );
  }
}

export default App;
