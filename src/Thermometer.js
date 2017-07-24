/**
 * Created by Josh on 7/24/2017.
 */
import React, { Component } from 'react';
import Request from 'superagent';
import {TemperatureConverter} from 'cis137-components';

class Thermometer extends Component {
    constructor() {
        super();
        this.state = {
            temper: "",
        };
    }

    tick() {
        Request
            .get(`http://api.openweathermap.org/data/2.5/weather?zip=21157,us&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`)
            .end((err, res) => {
                if (err) {
                    console.error(err);
                    return;
                }

                console.log(res);
                this.setState({
                    temper: res.body.main.temp.toString()
                });
            })
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            60000
        );
        this.tick()
    }

    render() {
        return <strong><TemperatureConverter kelvin={this.state.temper} toUnit="f"/></strong>
    }
};

export default Thermometer;