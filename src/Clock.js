/**
 * Created by Josh on 6/19/2017.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = { date: new Date(),
                       name: 'Bob'
                     };
    }

    tick() {
        this.setState( { date: new Date() });
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    // Cleans up the component from memory
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div>
                <h1>Hello, {this.state.name}!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

function tick() {
    ReactDOM.render(
        <Clock />,
        document.getElementById('root')
    );
}

//setInterval(tick, 1000);