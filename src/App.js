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
<br/>
              <section className="hero is-primary is-bold">
                  <div className="hero-body">
                      <div className="container">
                          <h1 className="title">
                              BONUS
                          </h1>
                          <h2>
                              Bonus content for your enjoyment!
                          </h2>
                      </div>
                  </div>
              </section>

              <section className="section">
                  <div className="columns">
                      <div className="column is-one-quarter notification is-success">
                          <strong>Watch a video while you browse:</strong>
                      </div>
                      <div className="column notification is-info">
                          <YouTube videoId="qN80_7rNmcE"/>
                      </div>
                      <div className="column is-one-quarter">
                          <Thermometer/>
                      </div>
                  </div>
              </section>

              <footer className="footer">
                      <div className="content has-text-centered">
                          <p>
                              Check out this website's code at our repository!
                              <br/>
                              <a href="https://github.com/Maze5656/Semester-Project">Maze5656@GitHub</a>
                          </p>
                  </div>
              </footer>
          </div>
        </div>

    );
  }
}

export default App;