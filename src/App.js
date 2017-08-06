import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar'
import logo1 from './logo.png';
import 'bulma/css/bulma.css';

class App extends Component {

  render() {
      return (
        <div>
          <div className="App">
              <img className="container is-fluid shopLogo" src={logo1} alt="R&TT Logo" />
            <div className="App-header">
                <NavBar />
            </div>
          </div>
        </div>
    );
  }
}

export default App;