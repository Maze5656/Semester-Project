import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar'
import logo1 from './logo.png';
import Request from 'superagent';
import TemperatureConverter from 'cis137-components';

class App extends Component {

    constructor()
    {
        super();
        this.state = {
            temper: ""
        };
    }

    componentWillMount() {

        }


    componentDidMount() {
        Request
            .get(`http://api.openweathermap.org/data/2.5/weather?zip=21157,us&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`)
            .end((err, res) => {
            if(err){
                console.error(err);
                return;
            }

            console.log(res);
            this.setState({
                temper: res.body.main.temp
            });
        })
    }

    componentWillReceiveProps(nextProps) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentWillUnmount() {

    }

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
            <p>
                {this.state.temper}
            </p>
        </div>
    );
  }
}

export default App;
